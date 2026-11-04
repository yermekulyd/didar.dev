"use client";

import { Menu, Rss, Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { Button, buttonVariants } from "@/shared/ui/button";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
];

function NavigationLinks({ pathname }: { pathname: string }) {
  return navigation.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={
        pathname === href
          ? "page"
          : pathname.startsWith(`${href}/`)
            ? "location"
            : undefined
      }
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "justify-start text-muted-foreground aria-[current]:bg-accent aria-[current]:text-accent-foreground",
      )}
    >
      {label}
    </Link>
  ));
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="relative mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-7">
          <Link
            className="flex items-center gap-2.5 rounded-md text-sm font-semibold tracking-tight"
            href="/"
          >
            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Terminal className="size-4" aria-hidden="true" />
            </span>
            didar.dev
          </Link>

          <nav
            className="hidden items-center gap-1 sm:flex"
            aria-label="Primary navigation"
          >
            <NavigationLinks pathname={pathname} />
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="icon">
            <a href="/feed.xml" aria-label="RSS feed">
              <Rss aria-hidden="true" />
            </a>
          </Button>
          <details key={pathname} className="sm:hidden">
            <summary
              className={buttonVariants({
                variant: "outline",
                size: "icon",
                className:
                  "cursor-pointer list-none [&::-webkit-details-marker]:hidden",
              })}
              aria-label="Navigation menu"
            >
              <Menu aria-hidden="true" />
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute inset-x-5 top-full z-10 mt-2 grid gap-1 rounded-xl border bg-card p-2 shadow-md"
            >
              <NavigationLinks pathname={pathname} />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
