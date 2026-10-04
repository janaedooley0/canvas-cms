"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type CourseNavProps = {
  courseId: string;
  term: string;
};

function getLinks(courseId: string) {
  const base = `/courses/${courseId}`;

  return [
    { href: base, label: "Home" },
    { href: `${base}/announcements`, label: "Announcements" },
    { href: `${base}/assignments`, label: "Assignments" },
    { href: `${base}/discussions`, label: "Discussions" },
    { href: `${base}/grades`, label: "Grades" },
    { href: `${base}/pages`, label: "Pages" },
    { href: `${base}/files`, label: "Files" },
    { href: `${base}/syllabus`, label: "Syllabus" },
    { href: `${base}/quizzes`, label: "Quizzes" },
    { href: `${base}/modules`, label: "Modules" },
    { href: `${base}/collaborations`, label: "Collaborations" },
    { href: `${base}/office_365`, label: "Office 365" },
    { href: `${base}/sensus_access`, label: "Sensus Access" },
    { href: `${base}/settings`, label: "Settings" },
  ];
}

export function CourseNav({ courseId, term }: CourseNavProps) {
  const pathname = usePathname();
  const links = getLinks(courseId);

  return (
    <nav className="w-48 p-4 pt-6">
      <ul className="space-y-1">
        {term && <p className="mb-2 text-[11px] text-gray-600">{term}</p>}
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`block px-0 py-1 rounded-md text-base text-[#00478f] ${pathname === link.href ? "" : "hover:underline"}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CourseBreadcrumb({ courseId }: { courseId: string }) {
  const pathname = usePathname();
  const current = getLinks(courseId).find((link) => link.href === pathname);

  if (!current || current.label === "Home") return null;

  return (
    <>
      <span aria-hidden="true">›</span>
      <span>{current.label}</span>
    </>
  );
}
