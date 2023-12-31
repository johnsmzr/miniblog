import { Blog } from "@/.contentlayer/generated";
import Link from "next/link";

export function BlogCardHeader(props: Blog) {
  const { title, publishedAt } = props;
  return (
    <>
      <h3 className="font-semibold text-2xl">{title}</h3>
      <div className="text-sm leading-10 text-neutral-500 dark:text-white/80">
        {publishedAt}
      </div>
    </>
  );
}

export function BlogCard(props: Blog) {
  return (
    <Link href={`/blog/${props.slug}`}>
      <BlogCardHeader {...props} />
      <p className="mb-10">{props.summary}</p>
    </Link>
  );
}
