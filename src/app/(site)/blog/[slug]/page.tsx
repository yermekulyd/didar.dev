import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { PageIntro } from "@/components/page-intro";
import { getPost, getPosts } from "@/lib/content";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  return {
    title: post?.title ?? "Article",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto grid max-w-3xl justify-items-start gap-7 py-12 sm:py-16">
      <Button asChild variant="ghost" size="sm" className="-ml-3">
        <Link href="/blog">
          <ArrowLeft aria-hidden="true" /> All writing
        </Link>
      </Button>
      <PageIntro
        eyebrow={`${post.type} · ${post.date} · ${post.readTime}`}
        title={post.title}
        description={post.excerpt}
      >
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </PageIntro>
      <div className="w-full border-t pt-7">
        <MarkdownContent blocks={post.blocks} />
      </div>
    </article>
  );
}
