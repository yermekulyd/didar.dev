import type { Metadata } from "next";
import { PostCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on software engineering, architecture and learning in public.",
};

export default function BlogPage() {
  const posts = getPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const otherPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <div className="grid gap-8 py-12 sm:gap-10 sm:py-16">
      <PageIntro
        eyebrow="From the notebook"
        title="Notes on making things work."
        description="Technical notes, decisions and honest postmortems from the process of becoming a better software engineer."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {featuredPost && (
          <div className="sm:col-span-2">
            <PostCard post={featuredPost} featured />
          </div>
        )}
        {otherPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
