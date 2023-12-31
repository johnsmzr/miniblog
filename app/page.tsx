import { Blog, allBlogs } from "contentlayer/generated";
import { BlogCard } from "./components/blog-card";

// 对博客文章按时间进行排序
export function compareTime(a: Blog, b: Blog) {
  if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
    return -1;
  }
  return 1;
}

export default function Home() {
  return (
    <section>
      {allBlogs
        .sort((a, b) => compareTime(a, b))
        .map((item) => (
          <BlogCard key={item._id} {...item} />
        ))}
    </section>
  );
}
