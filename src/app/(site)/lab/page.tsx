import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";

export const metadata: Metadata = {
  title: "Lab / Now",
  description:
    "Current focus, experiments and the next steps in Didar's engineering journey.",
};

const queue = [
  {
    title: "FastAPI + PostgreSQL",
    description: "Give the site a real backend.",
  },
  {
    title: "Docker Compose",
    description: "Make local development reproducible.",
  },
  { title: "VPS deployment", description: "Understand the server underneath." },
  {
    title: "Observability",
    description: "Know when things are broken and why.",
  },
];

export default function LabPage() {
  return (
    <div className="grid gap-8 py-12 sm:gap-10 sm:py-16">
      <PageIntro
        eyebrow="Lab / Now"
        title="Learning in public."
        description="A snapshot of what I am exploring now, what I am trying to understand and where the next experiment might lead."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-muted">
          <CardHeader>
            <Badge className="text-status">Current focus</Badge>
            <h2 className="max-w-sm text-2xl font-semibold tracking-tight text-balance">
              Building the smallest useful version of didar.dev.
            </h2>
            <p className="max-w-md text-sm/6 text-muted-foreground">
              The first milestone is a clear public site. The next one is a real
              API and a deployment pipeline that I understand end to end.
            </p>
          </CardHeader>
          <CardContent className="mt-auto space-y-2">
            <div className="flex justify-between gap-4 font-mono text-xs text-muted-foreground">
              <span>MVP</span>
              <span>01 / 04</span>
            </div>
            <progress
              aria-label="MVP progress"
              value={1}
              max={4}
              className="block h-1.5 w-full appearance-none overflow-hidden rounded-full bg-border [&::-moz-progress-bar]:bg-status [&::-webkit-progress-bar]:bg-border [&::-webkit-progress-value]:bg-status"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold tracking-tight">
              In the queue
            </h2>
          </CardHeader>
          <CardContent>
            <ol className="divide-y">
              {queue.map(({ title, description }, index) => (
                <li
                  key={title}
                  className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <Badge variant="outline" className="font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </Badge>
                  <div className="grid gap-1 text-sm">
                    <p className="font-medium">{title}</p>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            A note to self
          </h2>
          <blockquote className="max-w-3xl text-xl/8 font-medium tracking-tight text-pretty">
            Complexity is a tool, not a graduation badge. Add the next layer
            when the current one gives you a reason.
          </blockquote>
        </CardHeader>
        <CardFooter>
          <Button asChild variant="outline" size="sm">
            <Link href="/blog/why-this-site-exists">
              Read the reasoning <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
