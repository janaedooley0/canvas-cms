import { db } from "../../../../db";
import { coursesTable, courseStatus, pageComponent, pagesTable } from "@/index";
import { eq, and } from "drizzle-orm";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}
export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const [course] = await db
    .select({
      id: coursesTable.id,
      courseTitle: coursesTable.title,
      courseSubject: coursesTable.subject,
      courseNumber: coursesTable.number,
      courseInstructor: coursesTable.instructor,
    })
    .from(coursesTable)
    .where(eq(coursesTable.public_id, Number(courseId)));

  const [page] = await db
    .select()
    .from(pagesTable)
    .where(
      and(eq(pagesTable.courseId, course.id), eq(pagesTable.type, "home")),
    );

  const pc = await db
    .select()
    .from(pageComponent)
    .where(eq(pageComponent.pageId, page.id))
    .orderBy(pageComponent.position);
  return (
    <main>
      <h1 className="text-4xl font-bold text-course-heading">
        {course.courseTitle}
      </h1>

      <h2>
        {course.courseSubject} {course.courseNumber}
      </h2>

      {pc.map((c) => (
        <p key={c.id}>{c.content.text}</p>
      ))}
    </main>
  );
}
