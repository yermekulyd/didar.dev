import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { getProject, getProjects } from "@/lib/content";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project?.title ?? "Project",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <article className="container detail-page">
      <Link className="back-link" href="/projects">
        ← All projects
      </Link>
      <header className="detail-header">
        <p className="eyebrow">{project.eyebrow} · {project.status}</p>
        <h1>{project.title}</h1>
        <p className="detail-summary">{project.summary}</p>
        <div className="tag-list detail-tags">
          {project.technologies.map((technology) => (
            <span className="tag" key={technology}>{technology}</span>
          ))}
        </div>
      </header>
      <div className="detail-layout">
        <aside className="detail-aside">
          <p className="eyebrow">Project note</p>
          <p>This page will grow with the project. The goal is to keep the decisions and trade-offs visible.</p>
        </aside>
        <MarkdownContent blocks={project.blocks} />
      </div>
    </article>
  );
}
