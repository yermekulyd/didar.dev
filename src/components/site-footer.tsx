import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Building in public, one experiment at a time.</p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="mailto:hello@didar.dev">Email ↗</a>
          <Link href="/blog">Writing ↗</Link>
        </div>
      </div>
    </footer>
  );
}
