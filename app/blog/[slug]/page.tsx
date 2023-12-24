import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { BlogCardHeader } from "@/app/components/blog-card";
import { Mdx } from "@/app/components/mdx";

type BlogSlugProps = {
  params: {
    slug: string;
  };
};

export default function BlogSlug({ params }: BlogSlugProps) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <section className="prose prose-stone">
      <BlogCardHeader {...post} />
      <Mdx code={post.body.code} />
    </section>
  );
}
