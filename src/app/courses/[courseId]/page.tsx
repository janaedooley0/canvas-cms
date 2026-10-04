import { db } from "../../../../db";
import { coursesTable, courseStatus } from "@/index";
import { eq } from "drizzle-orm";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}
export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const [course] = await db
    .select({
      courseTitle: coursesTable.title,
      courseSubject: coursesTable.subject,
      courseNumber: coursesTable.number,
      courseInstructor: coursesTable.instructor,
    })
    .from(coursesTable)
    .where(eq(coursesTable.id, courseId));
  return (
    <main>
      <h1 className="text-4xl font-bold text-course-heading">
        {course.courseTitle}
      </h1>

      <h2>
        {course.courseSubject} {course.courseNumber}
      </h2>
    </main>
  );
}
