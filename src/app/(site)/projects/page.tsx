import type { Metadata } from "next";
import { ProjectCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects, experiments and engineering case studies by Didar.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="grid gap-8 py-12 sm:gap-10 sm:py-16">
      <PageIntro
        eyebrow="Selected work"
        title="Projects with a point of view."
        description="A growing collection of things I am building, breaking and learning from. Each project includes the reasoning behind the implementation."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
