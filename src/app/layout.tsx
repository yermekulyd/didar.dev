import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "didar.dev — Personal Engineering Platform",
    template: "%s — didar.dev",
  },
  description:
    "A personal engineering platform about building products, learning systems and documenting the path to production.",
  openGraph: {
    title: "didar.dev — Personal Engineering Platform",
    description:
      "Projects, notes and experiments from the path between interface and infrastructure.",
    type: "website",
    url: siteUrl,
    siteName: "didar.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "didar.dev — Personal Engineering Platform",
    description:
      "Projects, notes and experiments from the path between interface and infrastructure.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
