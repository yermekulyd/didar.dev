import { ArrowRight, ArrowUpRight, Terminal } from "lucide-react";
import Link from "next/link";
import { PostCard, ProjectCard } from "@/components/content-card";
import { getPosts, getProjects } from "@/lib/content";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";

const stack = ["Next.js", "FastAPI", "Docker", "Linux"];

function SectionHeading({
  id,
  label,
  title,
  href,
  linkText,
}: {
  id: string;
  label: string;
  title: string;
  href: string;
  linkText: string;
}) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div className="grid gap-2">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {label}
        </p>
        <h2
          id={id}
          className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
        >
          {title}
        </h2>
      </div>
      <Button asChild variant="ghost" size="sm" className="-ml-3 sm:ml-0">
        <Link href={href}>
          {linkText} <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}

export default function HomePage() {
  const projects = getProjects().filter((project) => project.featured);
  const posts = getPosts();

  return (
    <div className="grid gap-12 py-12 sm:gap-16 sm:py-16">
      <section
        className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-14 lg:py-6"
        aria-labelledby="hero-heading"
      >
        <div className="grid justify-items-start gap-5">
          <Badge variant="outline">
            <span
              className="size-1.5 rounded-full bg-status"
              aria-hidden="true"
            />
            Software engineer · Building in public
          </Badge>
          <h1
            id="hero-heading"
            className="text-[clamp(2.6rem,6.4vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-balance"
          >
            From interface to infrastructure.
          </h1>
          <p className="max-w-lg text-base/7 text-pretty text-muted-foreground sm:text-lg/8">
            I&apos;m Didar. I build digital products, learn how they work under
            the hood, and document the path from a first idea to a reliable
            production service.
          </p>
          <div className="mt-1 flex flex-wrap gap-2.5">
            <Button asChild>
              <Link href="/projects">
                Explore projects <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">About me</Link>
            </Button>
          </div>
        </div>

        <Card className="gap-0 overflow-hidden py-0">
          <CardHeader className="flex items-center justify-between gap-3 border-b bg-muted px-4 py-3.5 sm:px-5">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Terminal className="size-4" aria-hidden="true" />
              <span>~/didar.dev</span>
            </div>
            <Badge className="text-status">
              <span
                className="size-1.5 rounded-full bg-current"
                aria-hidden="true"
              />
              Building
            </Badge>
          </CardHeader>
          <CardContent className="grid gap-3 px-4 py-5 sm:px-5">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              01 / Current focus
            </p>
            <h2 className="text-xl font-semibold tracking-tight">
              Personal Engineering Platform
            </h2>
            <p className="text-sm/6 text-pretty text-muted-foreground">
              Growing this site into a playground for backend, deployment and
              observability.
            </p>
            <ul
              className="mt-1 flex flex-wrap gap-2"
              aria-label="Technology stack"
            >
              {stack.map((technology) => (
                <li key={technology}>
                  <Badge variant="outline">{technology}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-wrap justify-between gap-x-3 gap-y-1 border-t px-4 py-2.5 sm:px-5">
            <p className="text-xs text-muted-foreground">
              Next up · FastAPI + PostgreSQL
            </p>
            <Button asChild variant="ghost" size="sm" className="-mr-2">
              <Link href="/lab">
                Open the lab <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {projects.length > 0 && (
        <section
          className="border-t pt-7 sm:pt-9"
          aria-labelledby="projects-heading"
        >
          <SectionHeading
            id="projects-heading"
            label="Selected work"
            title="Projects with a point of view."
            href="/projects"
            linkText="View all projects"
          />
          <div className="grid gap-4 sm:grid-cols-2 [&>*:only-child]:col-span-full">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} heading="h3" />
            ))}
          </div>
        </section>
      )}

      <section
        className="border-t pt-7 sm:pt-9"
        aria-labelledby="writing-heading"
      >
        <SectionHeading
          id="writing-heading"
          label="From the notebook"
          title="Notes on making things work."
          href="/blog"
          linkText="Read the blog"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              featured={post.featured}
              heading="h3"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
