
import {BaseContent, Content} from "./interface";


export class ContentZhihu extends BaseContent{
     text: string | undefined;
     title: string | undefined;
    GetArticleText(): string | undefined {
        // if (this.text != undefined){
        //     return this.text
        // }
        // 获取所有 class 为 'RichContent-inner' 的 div 元素
        const richContentElements = document.querySelectorAll("div.RichContent-inner");
        if (richContentElements.length === 0) return undefined;
        // 定义一个数组用于保存每个 div 的内容
        const contentArray: string[] = [];
        richContentElements.forEach((richContentElement) => {
            // 获取该元素内的所有 img 标签
            const images = richContentElement.querySelectorAll("img");
            // 删除每一个 img 标签
            images.forEach((img) => {
                img.remove();
            });
            // 将该元素的 innerHTML 添加到数组中
            contentArray.push(richContentElement.innerHTML);
        });
        // 返回所有内容，用分割线分隔
        return contentArray.join("<hr>"); // <hr> 表示水平分割线
    }

    GetArticleTitle(): string | undefined {
        // if (this.title != undefined){
        //     return this.title
        // }
        // 获取 class 为 'QuestionHeader-title' 的 h1 元素
        const titleElement = document.querySelector("h1.QuestionHeader-title");
        if (titleElement) {
            // 返回该元素的文本内容
            return (titleElement as HTMLElement).innerText || (titleElement as HTMLElement).textContent || undefined;
        }
        // 如果没有找到该元素，返回 undefined
        return undefined;
    }

}