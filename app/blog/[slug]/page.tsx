import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { BlogCardHeader } from "@/app/components/blog-card";
import { Mdx } from "@/app/components/mdx";
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
    // <section className="prose prose-stone">
    <section className="py-6 prose dark:prose-invert">
      <BlogCardHeader {...post} />
      <Mdx code={post.body.code} />
    </section>
  );
}
