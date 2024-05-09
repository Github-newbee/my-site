# 使用VitePress+Github Actions开发部署个人网站

## vitepress

### 准备

- Node.js版本在18以上
- VScode编辑器

### 安装向导

创建文件夹，初始化项目

```md  
  npx vitepress init
```  

安装项目依赖

```md
  pnpm i -D vitepress
```

- 需要回答问题

```md
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```

### 启动  

运行

```md
  pnpm run docs:dev
```  

打包

```md
  pnpm run docs:bulid
```  

## Giuhub Actions

### 打开github创建公共仓库

<img src="https://img-blog.csdnimg.cn/direct/ecd3051766624e3ea8c0b0b70568ebdd.png#pic_center" alt="在这里插入图片描述">

### 修改配置文件和仓库同名
![alt text](/asset/image.png)

### 添加工作流

在action中添加自己的工作流

![alt text](/asset/image-1.png)

修改工作流名字和添加工作流配置  
配置文件内容参考链接,注意根据自己的情况进行修改
>https://vitepress.dev/zh/guide/deploy#github-pages

![alt text](/asset/image-2.png)

### 在vscode中打包项目，提交代码即可触发工作流自动构建部署

可在settings中找到部署的页面路径

![alt text](/asset/image-3.png)