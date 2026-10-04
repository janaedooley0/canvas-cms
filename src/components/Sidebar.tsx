"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  User,
  Gauge,
  BookType,
  CalendarDays,
  Clock,
  type LucideIcon,
} from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const links: NavLink[] = [
  { href: "/profile", label: "Profile", icon: User },
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/courses", label: "Courses", icon: BookType },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/history", label: "History", icon: Clock },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-24 min-h-screen bg-gray-900 text-white flex flex-col">
      <ul className="flex flex-col">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 h-20 w-full ${
                  isActive ? "bg-white text-gray-900" : "hover:bg-gray-800"
                }`}
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
