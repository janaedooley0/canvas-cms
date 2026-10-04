import type { Metadata } from "next";
import "./globals.css";
import { Lato, Geist } from "next/font/google";

import { db } from "../../db";
import { usersTable } from "@/index";
import { Sidebar } from "@/components/Sidebar";
import { CourseNav } from "@/components/CourseNav";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [user] = await db.select().from(usersTable).limit(1);

  const name =
    [user?.first_name, user?.last_name].filter(Boolean).join(" ") || "User";

  const avatarUrl =
    user?.image_url ??
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`;
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${lato.variable} font-sans antialiased min-h-screen flex`}
      >
        <Sidebar avatarUrl={avatarUrl} />
        <main className="flex-1 pl-2">{children}</main>
      </body>
    </html>
  );
}
