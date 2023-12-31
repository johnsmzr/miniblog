import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { BlogCardHeader } from "@/components/Blog-card";
import { Mdx } from "@/components/Mdx";
import { Metadata } from "next";

type BlogSlugProps = {
  params: {
    slug: string;
  };
};

// Dynamic metadata
export async function generateMetadata({
  params,
}: BlogSlugProps): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }
  const { title, publishedAt: publishedTime, summary: description } = post;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
    },
  };
}

export default function BlogSlug({ params }: BlogSlugProps) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    // 需要为黑夜模式添加 dark:prose-invert, 解决字看不清的问题
    <section className="py-6 prose prose-stone dark:prose-invert">
      <BlogCardHeader {...post} />
      <Mdx code={post.body.code} />
    </section>
  );
}
