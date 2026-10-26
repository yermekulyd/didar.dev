import type { Metadata } from "next";
import { PostCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software engineering, architecture and learning in public.",
};

export default function BlogPage() {
  const posts = getPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const otherPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <div className="container page-content">
      <PageIntro
        eyebrow="From the notebook"
        title="Notes on making things work."
        description="Technical notes, decisions and honest postmortems from the process of becoming a better software engineer."
      />
      {featuredPost && (
        <PostCard post={featuredPost} featured />
      )}
      <div className="post-grid blog-grid">
        {otherPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
