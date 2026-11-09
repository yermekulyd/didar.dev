import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-site flex-col gap-4 px-5 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Building in public, one experiment at a time.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 [&_a]:underline-offset-4 [&_a:hover]:text-foreground [&_a:hover]:underline">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="mailto:yermekulyd@gmail.com">Email ↗</a>
          <Link href="/blog">Writing ↗</Link>
        </div>
      </div>
    </footer>
  );
}
