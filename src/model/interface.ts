

export interface Content {
    title: string | undefined;  // 文章标题
    text: string | undefined;   // 文章内容
    BuildContent():void;
    // 获取文章文本内容
    GetArticleText(): string | undefined;
    // 获取文章标题
    GetArticleTitle(): string | undefined;
}

export class BaseContent implements Content{
    title: string | undefined;  // 文章标题
    text: string | undefined;   // 文章内容
    BuildContent():void{
        try{
            this.text = this.GetArticleText()
            this.title = this.GetArticleTitle()
        }catch (err :any) {
            console.error("Error occurred:", err.message);
        }
    }
    // 获取文章文本内容
    GetArticleText(): string | undefined{ return "Default Text" }
    // 获取文章标题
    GetArticleTitle(): string | undefined { return "Default Title" }
}