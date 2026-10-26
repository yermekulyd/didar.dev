import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description: "About Didar and the thinking behind didar.dev.",
};

export default function AboutPage() {
  return (
    <div className="container page-content about-page">
      <PageIntro
        eyebrow="A little context"
        title="I like understanding how the pieces fit together."
        description="I am a software engineer interested in the space between a thoughtful interface and the systems that make it reliable."
      />
      <div className="about-grid">
        <div className="about-lead">
          <p>
            My current focus is building a stronger foundation across the stack:
            product thinking on the frontend, practical APIs on the backend and
            the infrastructure that keeps everything running.
          </p>
          <p>
            This site is my way of making that learning visible. It is part
            portfolio, part notebook and part laboratory.
          </p>
          <Link className="button button-dark" href="/projects">
            See what I&apos;m building <span>↗</span>
          </Link>
        </div>
        <div className="about-facts">
          <div>
            <span>Currently learning</span>
            <strong>Python · FastAPI · Linux</strong>
          </div>
          <div>
            <span>Interested in</span>
            <strong>Product engineering · Systems · DX</strong>
          </div>
          <div>
            <span>Based in</span>
            <strong>Almaty, Kazakhstan</strong>
          </div>
          <div>
            <span>Elsewhere</span>
            <strong>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>{" "}
              · <a href="mailto:hello@didar.dev">Email ↗</a>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
