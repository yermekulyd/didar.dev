import Link from "next/link";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
];

function NavigationLinks() {
  return navigation.map((item) => (
    <Link key={item.href} href={item.href}>
      {item.label}
    </Link>
  ));
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="didar.dev home">
          didar<span>.dev</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavigationLinks />
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <NavigationLinks />
          </nav>
        </details>
      </div>
    </header>
  );
}
