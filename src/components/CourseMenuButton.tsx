"use client";
import { IconHamburgerLine } from "@instructure/ui-icons";

export function CourseMenuButton() {
  return (
    <button
      type="button"
      aria-label="Toggle course menu"
      className="text-2xl leading-none"
    >
      <IconHamburgerLine />
    </button>
  );
}
