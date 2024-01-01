import { Blog, allBlogs } from "contentlayer/generated";
import { BlogCard } from "@/components/BlogCard";

// 对博客文章按时间进行排序
function compareTime(a: Blog, b: Blog) {
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
          <div className="hover:scale-[0.99] transform duration-300">
          <BlogCard key={item._id} {...item} />
          </div>
        ))}
    </section>
  );
}
