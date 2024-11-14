// popup.ts
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded fired"); // 确认 DOM 已加载
  const button = document.getElementById("ReadMode") as HTMLButtonElement;
  button.innerText = "ReadMode";

  button.addEventListener("click", async () => {
    console.log("click")

    // 获取当前活动标签页
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (button.innerText === "ReadMode") {
      // 向内容脚本发送消息，请求获取文章数据
      console.log("read mode")
      chrome.tabs.sendMessage(tab.id as number, { action: "BuildPage" });
      button.innerText = "Exit";
    } else {
      button.innerText = "ReadMode";
      // 刷新当前页面
      chrome.tabs.reload(tab.id as number);  // 使用 tab.id 而不是 tab.innerText
    }
  });
});
