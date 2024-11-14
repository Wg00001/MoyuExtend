// popup.ts
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("ReadMode") as HTMLButtonElement;
  button.innerText = "ReadMode";

  button.addEventListener("click", async () => {
    // 获取当前活动标签页
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (button.innerText === "ReadMode") {
      // 向内容脚本发送消息，请求获取文章数据
      chrome.tabs.sendMessage(tab.id as number, { action: "getArticleData" });
      button.innerText = "Exit";
    } else {
      button.innerText = "ReadMode";
      // 刷新当前页面
      chrome.tabs.reload(tab.id as number);  // 使用 tab.id 而不是 tab.innerText
    }
  });
});
