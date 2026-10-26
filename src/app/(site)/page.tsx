import Link from "next/link";
import { PostCard, ProjectCard } from "@/components/content-card";
import { getPosts, getProjects } from "@/lib/content";

export default function HomePage() {
  const projects = getProjects().filter((project) => project.featured);
  const posts = getPosts();

  return (
    <div className="home-page">
      <section className="container hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · Building in public</p>
          <h1>
            From <em>interface</em> to infrastructure.
          </h1>
          <p className="hero-description">
            I&apos;m Didar. I build digital products, learn how they work under the hood, and document the path from a first idea to a reliable production service.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">
              Explore projects <span>↗</span>
            </Link>
            <Link className="text-link" href="/about">
              More about me <span>→</span>
            </Link>
          </div>
        </div>
        <div className="hero-note">
          <span className="note-index">01 / NOW</span>
          <p>Turning this website into a small, honest playground for backend and DevOps.</p>
          <span className="note-line" />
          <span className="note-caption">Next up: FastAPI + PostgreSQL</span>
        </div>
      </section>

      <section className="container section-block" aria-labelledby="focus-heading">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Current focus</p>
            <h2 id="focus-heading">Learning by shipping.</h2>
          </div>
          <Link className="text-link" href="/lab">
            Open the lab <span>↗</span>
          </Link>
        </div>
        <div className="focus-grid">
          <div className="focus-number">01</div>
          <div>
            <h3>Personal Engineering Platform</h3>
            <p>Growing this site from a simple Next.js frontend into a production system with an API, database, deployment pipeline and observability.</p>
          </div>
          <div className="focus-stack">
            <span>Next.js</span>
            <span>FastAPI</span>
            <span>Docker</span>
            <span>Linux</span>
          </div>
        </div>
      </section>

      <section className="container section-block" aria-labelledby="projects-heading">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-heading">Projects with a point of view.</h2>
          </div>
          <Link className="text-link" href="/projects">
            View all projects <span>↗</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="container section-block writing-section" aria-labelledby="writing-heading">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">From the notebook</p>
            <h2 id="writing-heading">Notes on making things work.</h2>
          </div>
          <Link className="text-link" href="/blog">
            Read the blog <span>↗</span>
          </Link>
        </div>
        <div className="post-grid">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} featured={post.featured} />
          ))}
        </div>
      </section>

      <section className="container closing-banner">
        <p className="eyebrow">A small invitation</p>
        <h2>Curious about the messy middle?</h2>
        <p>That&apos;s where most of the useful engineering stories happen.</p>
        <Link className="button button-light" href="/blog">
          Start reading <span>↗</span>
        </Link>
      </section>
    </div>
  );
}
