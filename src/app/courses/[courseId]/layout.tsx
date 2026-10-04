import { db } from "../../../../db";
import { coursesTable } from "@/modules/course";
import { eq } from "drizzle-orm";

import { CourseNav } from "@/components/CourseNav";
import Link from "next/link";
import { courseSections, formatSemester } from "@/modules/course_sections";

export default async function CourseLayout({
  children,
  params,
}: LayoutProps<"/courses/[courseId]">) {
  const { courseId } = await params;

  const [row] = await db
    .select()
    .from(coursesTable)
    .leftJoin(courseSections, eq(courseSections.course_id, coursesTable.id))
    .where(eq(coursesTable.public_id, Number(courseId)));

  const course = row.courses;
  const section = row.course_sections;

  return (
    <div className="flex flex-col flex-1">
      <header className="h-14 border-b flex items-center px-6">
        {/* breadcrumbs go here */}

        <Link href="/courses/$[courseId]">
          {course.subject}-{course.number}-{section?.section_code}{" "}
          {course.title} {section ? formatSemester(section.semester_code) : ""}
        </Link>

        {/* breadcrumbs go here */}
      </header>

      <div className="flex flex-1">
        <CourseNav courseId={courseId} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
