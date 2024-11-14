

export interface Content {
    title: string | undefined;  // 文章标题
    text: string | undefined;   // 文章内容
    BuildContent();
    // 获取文章文本内容
    GetArticleText(): string | undefined;
    // 获取文章标题
    GetArticleTitle(): string | undefined;
}
