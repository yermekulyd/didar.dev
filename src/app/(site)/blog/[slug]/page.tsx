import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { getPost, getPosts } from "@/lib/content";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  return {
    title: post?.title ?? "Article",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <article className="container detail-page">
      <Link className="back-link" href="/blog">
        ← All writing
      </Link>
      <header className="detail-header article-header">
        <p className="eyebrow">{post.type} · {post.date} · {post.readTime}</p>
        <h1>{post.title}</h1>
        <p className="detail-summary">{post.excerpt}</p>
        <div className="tag-list detail-tags">
          {post.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </header>
      <div className="article-body">
        <MarkdownContent blocks={post.blocks} />
      </div>
    </article>
  );
}
