import { coursesTable } from "@/modules/course";
import { db } from "db";
import { eq } from "drizzle-orm";
import { updateCourse } from "../../actions";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CourseSettlingsPage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const [course] = await db
    .select({
      courseId: coursesTable.id,
      courseTitle: coursesTable.title,
      courseSubject: coursesTable.subject,
      courseNumber: coursesTable.number,
      courseInstructor: coursesTable.instructor,
      creditHours: coursesTable.credit_hours,
      status: coursesTable.status,
    })
    .from(coursesTable)
    .where(eq(coursesTable.id, courseId));

  return (
    <form action={updateCourse}>
      <input type="hidden" name="courseId" value={course.courseId} />
      <div>
        <label>Course Title:</label>
        <input
          type="text"
          name="title"
          defaultValue={course.courseTitle ?? ""}
        />
        <div>
          <div>
            <label>Course Subject:</label>
            <input name="subject" defaultValue={course.courseSubject} />
          </div>
        </div>
        <label>Course Number:</label>
        <input name="number" defaultValue={course.courseNumber} />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
