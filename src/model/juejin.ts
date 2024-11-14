import {BaseContent, Content} from "./interface"; // 导入接口

export class ContentJuejin extends BaseContent{
    GetArticleText(): string | undefined {
        // if (this.text != undefined){
        //     return this.text
        // }
        const articleRoot = document.getElementById("article-root");
        if (articleRoot) {
            // 获取该元素的innerHTML，即元素内的所有HTML内容
            return articleRoot.innerHTML
                .replace(/<style.*?<\/style>/gi, "")
                .replace(/<script.*?<\/script>/gi, "")
                .replace(/<pre[\s\S]*?<\/pre>/gi, "")
                .replace(/<img.*?>/g, "");
        }
        return undefined;
    }
    GetArticleTitle(): string | undefined {
        // if (this.title != undefined){
        //     return this.title
        // }
        const titleElement = document.querySelector(".article-title");
        if (titleElement) {
            // 获取标题文本内容
            return titleElement.textContent || titleElement.innerHTML;
        }
        return undefined;
    }

}
