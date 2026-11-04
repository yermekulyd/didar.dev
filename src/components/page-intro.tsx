import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: PageIntroProps) {
  return (
    <header className="grid max-w-3xl gap-4">
      <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-base/7 text-pretty text-muted-foreground sm:text-lg/8">
        {description}
      </p>
      {children}
    </header>
  );
}
