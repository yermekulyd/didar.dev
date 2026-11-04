import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { PageIntro } from "@/components/page-intro";
import { getProject, getProjects } from "@/lib/content";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader } from "@/shared/ui/card";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project?.title ?? "Project",
    description: project?.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <article className="grid justify-items-start gap-7 py-12 sm:py-16">
      <Button asChild variant="ghost" size="sm" className="-ml-3">
        <Link href="/projects">
          <ArrowLeft aria-hidden="true" /> All projects
        </Link>
      </Button>
      <PageIntro
        eyebrow={`${project.eyebrow} · ${project.status}`}
        title={project.title}
        description={project.summary}
      >
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>
      </PageIntro>
      <div className="grid w-full items-start gap-7 border-t pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] lg:gap-10">
        <MarkdownContent blocks={project.blocks} />
        <aside>
          <Card className="bg-muted">
            <CardHeader>
              <h2 className="text-sm font-semibold">Project note</h2>
              <p className="text-sm/6 text-muted-foreground">
                This page will grow with the project. The goal is to keep the
                decisions and trade-offs visible.
              </p>
            </CardHeader>
          </Card>
        </aside>
      </div>
    </article>
  );
}
