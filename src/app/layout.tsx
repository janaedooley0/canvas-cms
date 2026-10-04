import type { Metadata } from "next";
import "./globals.css";
import { Lato, Geist } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { CourseNav } from "@/components/CourseNav";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Canvas CMS",
  description:
    "Next.js CMS web application for Canvas. Used by post-secondary students.",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${lato.variable} font-sans min-h-screen flex`}>
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
