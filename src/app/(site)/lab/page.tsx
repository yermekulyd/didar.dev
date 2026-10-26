import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Lab / Now",
  description: "Current focus, experiments and the next steps in Didar's engineering journey.",
};

export default function LabPage() {
  return (
    <div className="container page-content">
      <PageIntro
        eyebrow="Lab / Now"
        title="Learning in public."
        description="A snapshot of what I am exploring now, what I am trying to understand and where the next experiment might lead."
      />
      <div className="lab-grid">
        <section className="lab-card lab-card-dark">
          <p className="eyebrow">Current focus</p>
          <h2>Building the smallest useful version of didar.dev.</h2>
          <p>The first milestone is a clear public site. The next one is a real API and a deployment pipeline that I understand end to end.</p>
          <div className="lab-progress"><span /></div>
          <div className="progress-meta"><span>MVP</span><span>01 / 04</span></div>
        </section>
        <section className="lab-card">
          <p className="eyebrow">In the queue</p>
          <ul className="lab-list">
            <li><span>01</span><div><strong>FastAPI + PostgreSQL</strong><small>Give the site a real backend.</small></div></li>
            <li><span>02</span><div><strong>Docker Compose</strong><small>Make local development reproducible.</small></div></li>
            <li><span>03</span><div><strong>VPS deployment</strong><small>Understand the server underneath.</small></div></li>
            <li><span>04</span><div><strong>Observability</strong><small>Know when things are broken and why.</small></div></li>
          </ul>
        </section>
      </div>
      <section className="lab-note">
        <p className="eyebrow">A note to self</p>
        <blockquote>Complexity is a tool, not a graduation badge. Add the next layer when the current one gives you a reason.</blockquote>
        <Link className="text-link" href="/blog/why-this-site-exists">Read the reasoning <span>↗</span></Link>
      </section>
    </div>
  );
}
