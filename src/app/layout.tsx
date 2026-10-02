import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canvas CMS",
  description:
    "Next.js CMS web application for Canvas. Used by post-secondary students.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
