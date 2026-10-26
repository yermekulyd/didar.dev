import { getPosts, siteUrl } from "@/lib/content";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const posts = getPosts();
  const items = posts
    .map(
      (post) => `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${siteUrl}/blog/${post.slug}</link>
          <guid>${siteUrl}/blog/${post.slug}</guid>
          <description>${escapeXml(post.excerpt)}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`,
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>didar.dev — Writing</title>
        <link>${siteUrl}/blog</link>
        <description>Notes on software engineering, architecture and learning in public.</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
