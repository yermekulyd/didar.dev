import Link from "next/link";
import type { Post, Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={`/projects/${project.slug}`}>
      <div className="card-topline">
        <span className="card-eyebrow">{project.eyebrow}</span>
        <span className="card-arrow">↗</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-list">
        {project.technologies.map((technology) => (
          <span className="tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>
      <span className="status-pill">{project.status}</span>
    </Link>
  );
}

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link className={`post-card${featured ? " post-card-featured" : ""}`} href={`/blog/${post.slug}`}>
      <div className="card-topline">
        <span className="card-eyebrow">{post.type}</span>
        <span className="post-date">{post.date}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="post-meta">
        <span>{post.readTime}</span>
        <span className="card-arrow">↗</span>
      </div>
    </Link>
  );
}
