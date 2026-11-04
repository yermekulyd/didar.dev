import type { ContentBlock } from "@/lib/content";

export function MarkdownContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="max-w-prose space-y-5 text-base/8 text-pretty text-foreground/85">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "heading") {
          return (
            <h2
              className="mt-9 text-2xl font-semibold tracking-tight text-foreground first:mt-0"
              key={key}
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              className="list-disc space-y-1 pl-6 marker:text-muted-foreground"
              key={key}
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              className="border-l-2 pl-4 text-muted-foreground italic"
              key={key}
            >
              {block.text}
            </blockquote>
          );
        }

        return <p key={key}>{block.text}</p>;
      })}
    </div>
  );
}
