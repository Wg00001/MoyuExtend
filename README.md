
## 简介
项目名: MoyuExtend

项目介绍: 读取页面的文章内容,将页面替换成CSDN的样式


## 开发

### 目录

```text
MoyuExtend
├── dist/            #输出目录
├── src/             #开发目录
│   ├── model/       #用于获取文章内容的代码
│   ├── view/        #html和css文件
│   └── view_model/  #处理内容的代码
├── resource/        #资源目录
├── manifest.json
├── package.json
└── tsconfig.json

```

### 配置
1. 需要先安装`node.js`

2. 安装后在`package.json`中执行对应的script,以安装配置,和在不同的系统中编译该程序

3. 编译后的程序在`dist`目录下,在浏览器扩展管理页面中,选择"加载解压缩的扩展",并选择本项目目录下的`dist`目录即可