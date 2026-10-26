import fs from "node:fs";
import path from "node:path";

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  status: string;
  technologies: string[];
  featured: boolean;
  blocks: ContentBlock[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  type: string;
  tags: string[];
  featured: boolean;
  blocks: ContentBlock[];
};

const contentRoot = path.join(process.cwd(), "src", "content");

function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { metadata: new Map<string, string>(), body: source };
  }

  const metadata = new Map<string, string>();

  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");

    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    metadata.set(key, value);
  }

  return { metadata, body: match[2] };
}

function parseBlocks(body: string): ContentBlock[] {
  const lines = body.trim().split("\n");
  const blocks: ContentBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length > 0) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", text: trimmed.slice(3) });
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2));
      continue;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", text: trimmed.slice(2) });
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function readContentFile(directory: "projects" | "posts", slug: string) {
  const filePath = path.join(contentRoot, directory, `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { metadata, body } = parseFrontmatter(source);

  return { metadata, blocks: parseBlocks(body) };
}

function getSlugs(directory: "projects" | "posts") {
  return fs
    .readdirSync(path.join(contentRoot, directory))
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

function toBoolean(value: string | undefined) {
  return value === "true";
}

function toList(value: string | undefined) {
  return value ? value.split(",").map((item) => item.trim()) : [];
}

export function getProjects(): Project[] {
  return getSlugs("projects")
    .map((slug) => {
      const { metadata, blocks } = readContentFile("projects", slug);

      return {
        slug,
        title: metadata.get("title") ?? slug,
        eyebrow: metadata.get("eyebrow") ?? "Project",
        summary: metadata.get("summary") ?? "",
        status: metadata.get("status") ?? "In progress",
        technologies: toList(metadata.get("technologies")),
        featured: toBoolean(metadata.get("featured")),
        blocks,
      };
    })
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

export function getPosts(): Post[] {
  return getSlugs("posts")
    .map((slug) => {
      const { metadata, blocks } = readContentFile("posts", slug);

      return {
        slug,
        title: metadata.get("title") ?? slug,
        excerpt: metadata.get("excerpt") ?? "",
        date: metadata.get("date") ?? "",
        readTime: metadata.get("readTime") ?? "5 min read",
        type: metadata.get("type") ?? "Note",
        tags: toList(metadata.get("tags")),
        featured: toBoolean(metadata.get("featured")),
        blocks,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export const siteUrl = "https://didar.dev";
