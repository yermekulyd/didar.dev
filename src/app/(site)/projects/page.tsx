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
    <div className="container page-content">
      <PageIntro
        eyebrow="Selected work"
        title="Projects with a point of view."
        description="A growing collection of things I am building, breaking and learning from. Each project includes the reasoning behind the implementation."
      />
      <div className="project-grid project-grid-wide">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
