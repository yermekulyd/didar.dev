import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://didar.dev"),
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
    url: "https://didar.dev",
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
