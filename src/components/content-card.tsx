import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Post, Project } from "@/lib/content";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card, CardFooter, CardHeader } from "@/shared/ui/card";

const titleLink =
  "rounded-sm text-lg font-semibold tracking-tight outline-offset-4 before:absolute before:inset-0 before:rounded-xl";
const interactiveCard =
  "relative h-full transition-colors hover:border-ring/50";

export function ProjectCard({
  project,
  heading: Heading = "h2",
}: {
  project: Project;
  heading?: "h2" | "h3";
}) {
  return (
    <Card className={interactiveCard}>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline">{project.eyebrow}</Badge>
          <ArrowUpRight
            className="size-4 text-muted-foreground"
            aria-hidden="true"
          />
        </div>
        <Heading>
          <Link className={titleLink} href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </Heading>
        <p className="max-w-2xl text-sm/6 text-muted-foreground">
          {project.summary}
        </p>
      </CardHeader>
      <CardFooter className="mt-auto flex-wrap gap-2">
        <Badge className="text-status">{project.status}</Badge>
        {project.technologies.map((technology) => (
          <Badge variant="outline" key={technology}>
            {technology}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}

export function PostCard({
  post,
  featured = false,
  heading: Heading = "h2",
}: {
  post: Post;
  featured?: boolean;
  heading?: "h2" | "h3";
}) {
  return (
    <Card className={cn(interactiveCard, featured && "bg-muted")}>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="outline">{post.type}</Badge>
          <time
            className="font-mono text-xs text-muted-foreground"
            dateTime={post.date}
          >
            {post.date}
          </time>
        </div>
        <Heading>
          <Link className={titleLink} href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </Heading>
        <p className="max-w-2xl text-sm/6 text-muted-foreground">
          {post.excerpt}
        </p>
      </CardHeader>
      <CardFooter className="mt-auto justify-between gap-2 text-xs text-muted-foreground">
        <span>{post.readTime}</span>
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </CardFooter>
    </Card>
  );
}
