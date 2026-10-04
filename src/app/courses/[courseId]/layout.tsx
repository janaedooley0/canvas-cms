import { db } from "../../../../db";
import { coursesTable } from "@/modules/course";
import { eq } from "drizzle-orm";

import { CourseNav, CourseBreadcrumb } from "@/components/CourseNav";
import Link from "next/link";
import { courseSections, formatSemester } from "@/modules/course_sections";
import { CourseMenuButton } from "@/components/CourseMenuButton";

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
      <header className="h-18 border-b flex items-center ml-3 pr-6 gap-6 text-[#00478f]">
        {/* breadcrumbs go here */}
        <CourseMenuButton />
        <div className="flex items-center gap-2">
          <Link href={`/courses/${courseId}`}>
            {course.subject}-{course.number}-{section?.section_code}{" "}
            {course.title}{" "}
            {section ? formatSemester(section.semester_code) : ""}
          </Link>
          <CourseBreadcrumb courseId={courseId} />
        </div>

        {/* breadcrumbs go here */}
      </header>

      <div className="flex flex-1">
        <CourseNav
          courseId={courseId}
          term={section ? formatSemester(section.semester_code) : ""}
        />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
