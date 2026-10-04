"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type CourseNavProps = {
  courseId: string;
};

export function CourseNav({ courseId }: CourseNavProps) {
  const pathname = usePathname();
  const base = `/courses/${courseId}`;

  const links = [
    { href: base, label: "Home" },
    { href: `${base}/syllabus`, label: "Syllabus" },
    { href: `${base}/assignments`, label: "Assignments" },
    { href: `${base}/grades`, label: "Grades" },
    { href: `${base}/files`, label: "Files" },
    { href: `${base}/settings`, label: "Settings" },
  ];

  return (
    <nav className="w-48 border-r p-4">
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`block px-3 py-2 rounded-md ${pathname === link.href ? "font-bold border-l-4 border-gray-900" : "hover:underline"}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
