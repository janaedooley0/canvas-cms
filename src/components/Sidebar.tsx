"use client";
import { ComponentType, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Gauge,
  BookType,
  CalendarDays,
  Inbox,
  History as HistoryIcon,
  CircleQuestionMark,
  ArrowLeftToLine,
  ArrowRightToLine,
  type LucideIcon,
} from "lucide-react";

import {
  IconDashboardLine,
  IconCoursesLine,
  IconCalendarMonthLine,
  IconInboxLine,
  IconClockLine,
  IconLifePreserverLine,
} from "@instructure/ui-icons";

type NavLink = {
  href: string;
  label: string;
  icon: ComponentType;
  avatar?: boolean;
};

const links: NavLink[] = [
  { href: "/profile", label: "Account", icon: User, avatar: true },
  { href: "/dashboard", label: "Dashboard", icon: IconDashboardLine },
  { href: "/courses", label: "Courses", icon: IconCoursesLine },
  { href: "/calendar", label: "Calendar", icon: IconCalendarMonthLine },
  { href: "/inbox", label: "Inbox", icon: IconInboxLine },
  { href: "/history", label: "History", icon: IconClockLine },
  { href: "/help", label: "Help", icon: IconLifePreserverLine },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      aria-label="Global navigation"
      className={`sticky top-0 h-screen shrink-0 flex flex-col bg-background text-foreground font-(family-name:--font-lato) ${
        collapsed ? "w-[54px]" : "w-[84px]"
      }`}
    >
      <Link href="/dashboard" className="flex justify-center py-3">
        <Image
          src="/uofm-logomark.png"
          alt="Dashboard"
          width={184}
          height={169}
          className="h-auto w-2/3"
        />
      </Link>
      <ul className="flex flex-1 flex-col overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                title={collapsed ? link.label : undefined}
                className={`flex flex-col items-center gap-[3px] px-1 py-[7px] text-center ${
                  isActive
                    ? "bg-white text-global-nav-active"
                    : "hover:bg-black/20"
                }`}
              >
                {link.avatar ? (
                  <span
                    className={`flex size-9 items-center justify-center rounded-full border-2 text-xl leading-none ${
                      isActive ? "border-global-nav-active" : "border-white"
                    }`}
                  >
                    <Icon />
                  </span>
                ) : (
                  <span className="text-[26px] leading-none">
                    <Icon />
                  </span>
                )}
                {!collapsed && (
                  <span className="text-[13px] leading-tight">
                    {link.label}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
        className="flex h-12 shrink-0 items-center justify-center hover:bg-black/20"
      >
        {collapsed ? (
          <ArrowRightToLine className="size-5" />
        ) : (
          <ArrowLeftToLine className="size-5" />
        )}
      </button>
    </nav>
  );
}
