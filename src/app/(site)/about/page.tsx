import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "About Didar and the thinking behind didar.dev.",
};

export default function AboutPage() {
  return (
    <div className="grid gap-8 py-12 sm:gap-10 sm:py-16">
      <PageIntro
        eyebrow="A little context"
        title="I like understanding how the pieces fit together."
        description="I am a software engineer interested in the space between a thoughtful interface and the systems that make it reliable."
      />
      <div className="grid items-start gap-6 border-t pt-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
        <div className="grid max-w-prose justify-items-start gap-4 text-base/8 text-muted-foreground">
          <p>
            My current focus is building a stronger foundation across the stack:
            product thinking on the frontend, practical APIs on the backend and
            the infrastructure that keeps everything running.
          </p>
          <p>
            This site is my way of making that learning visible. It is part
            portfolio, part notebook and part laboratory.
          </p>
          <Button asChild>
            <Link href="/projects">
              See what I&apos;m building <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <Card className="py-0">
          <dl className="divide-y text-sm [&>div]:grid [&>div]:gap-1 [&>div]:px-5 [&>div]:py-4 [&_dt]:text-muted-foreground [&_dd]:font-medium">
            <div>
              <dt>Currently learning</dt>
              <dd>Python · FastAPI · Linux</dd>
            </div>
            <div>
              <dt>Interested in</dt>
              <dd>Product engineering · Systems · DX</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Almaty, Kazakhstan</dd>
            </div>
            <div>
              <dt>Elsewhere</dt>
              <dd className="flex flex-wrap gap-x-4 [&_a]:underline-offset-4 [&_a:hover]:underline">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href="mailto:hello@didar.dev">Email ↗</a>
              </dd>
            </div>
          </dl>
        </Card>
      </div>
    </div>
  );
}
