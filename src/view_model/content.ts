// changePage.ts

import {Content} from "../model/interface";
import {ContentJuejin} from "../model/juejin";
import {ContentZhihu} from "../model/zhihu";

function changePage(content: Content): void {
    // 创建一个容器用于加载新页面的内容
    const tempContainer = document.createElement("div");
    tempContainer.style.display = "none";
    document.body.appendChild(tempContainer);

    // 获取图片的路径
    const top_image_src: string = chrome.runtime.getURL("resource/top.png");
    const left_image_src: string = chrome.runtime.getURL("resource/left.png");
    const right_image_src: string = chrome.runtime.getURL("resource/right.png");

    // 加载自定义布局的HTML文件
    fetch(chrome.runtime.getURL("new_page.html"))
        .then((response: Response) => response.text())
        .then((data: string) => {
            // 将获取到的 HTML 内容插入临时容器中
            tempContainer.innerHTML = data;

            // 从临时容器中提取页面内容
            const newArticleContainer = tempContainer.querySelector("#page-container") as HTMLElement;
            const top_image = tempContainer.querySelector("#top-image") as HTMLImageElement;
            const left_image = tempContainer.querySelector("#left-image") as HTMLImageElement;
            const right_image = tempContainer.querySelector("#right-image") as HTMLImageElement;

            // 设置图片路径
            top_image.src = top_image_src;
            left_image.src = left_image_src;
            right_image.src = right_image_src;

            // 将提取到的内容替换到当前页面的主体部分
            document.body.innerHTML = newArticleContainer.outerHTML;

            // 设置标题和内容
            const titleElement = document.getElementById("new-article-title");
            const contentElement = document.getElementById("new-article-content");

            if (titleElement) {
                titleElement.textContent = content.title || "Get title fail";
            }
            if (contentElement) {
                contentElement.innerHTML = content.text || "Get text fail";
            }

            // 移除临时容器
            document.body.removeChild(tempContainer);
        })
        .catch((error: Error) => console.error("Error loading custom layout:", error));
}
// content.ts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "BuildPage") {
        console.log("build page")
        const currentUrl = window.location.href;
        console.log("get url:",currentUrl)
        if (!currentUrl) {
            console.log("当前页面没有 URL");
            return;  // 取消后续操作
        }
        // 如果 currentUrl 的前缀是 "zhihu"
        let content: Content | null = null;
        if (currentUrl.startsWith("https://juejin.cn/post/")) {
            console.log("https://juejin.cn/post/")
            content = new ContentJuejin; // 根据需求将 content 赋值为 "Zhihu"
        }
        if (currentUrl.startsWith("https://www.zhihu.com/question/")){
            console.log("https://www.zhihu.com/question/")
            content = new ContentZhihu;
        }
        if(content == null){
            console.log("该页面暂未支持");
            alert("该页面暂未支持")
            return;  // 取消后续操作
        }
        content.BuildContent()
        console.log("build content")
        // 调用 changePage 函数并传入文章数据
        changePage(content);
    }
});
