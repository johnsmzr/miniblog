# 介绍

尽量制作一个**精简**的博客，最小化是原则。

# To Do 规划

- [ ] 增加文章分类目录
- [ ] 增加搜索功能
- [ ] 增加评论功能
- [ ] 增加登陆功能

# 已有功能

✅ 增加自动生成站点地图 sitemap.xml 优化SEO

✅ 增加自动生成 robots.txt 优化SEO

✅ 加入 contentlayer，支持用 markdown(mdx)写文章

✅ 白天/黑夜模式

✅ 增加代码高亮

# 参考：

https://github.com/gwt9502/gwt9502.io/blob/main/contentlayer.config.ts

https://www.199406.xyz/blog/use-nextjs-create-blog

---

https://github.com/timlrx/tailwind-nextjs-starter-blog

https://tailwind-nextjs-starter-blog.vercel.app/blog

---

https://github.com/leerob/leerob.io

https://leerob.io/blog

---

https://github.com/pengtikui/pengtikui.cn

https://pengtikui.cn/blog

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started 如何使用

```sh
# 开发模式
npm run dev

# 构建
npm run build

# 启动
npm run start

```

## 构建 docker 镜像

```sh
# docker build -t johnzr/miniblog:v0.1.0 .

# 构建多架构镜像
docker buildx build --platform linux/amd64,linux/arm64 \
    -t johnzr/miniblog:v0.1.1 \
    -t johnzr/miniblog:latest \
    --push .


docker push johnzr/miniblog:v0.1.0

docker run -d -p 3000:3000 johnzr/miniblog:v0.1.0

```






# 官方文档

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
