import { MetadataRoute } from "next";
import { Blog, allBlogs } from "contentlayer/generated";

// 对博客文章按时间进行排序
function compareTime(a: Blog, b: Blog) {
  if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
    return -1;
  }
  return 1;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allPost = [...allBlogs]
    .sort((a, b) => compareTime(a, b))
    .map((item) => ({
      url: `https://miniblog-lake.vercel.app/${item.slug}`,
      lastModified: new Date(item.publishedAt),
    }));

  return [
    {
      url: "https://miniblog-lake.vercel.app/",
      lastModified: new Date(),
    },
    ...allPost,
  ];
}
