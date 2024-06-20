import { courses } from "@/db/schema";
import { getCourses, getUserProgress } from "../../../db/queries";

import { List } from "./list";

const CoursesPage = async () => {
  const coursesData = await getCourses();

  const userProgressData = getUserProgress();

  // Promise helps with waterfall (best practice)
  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>

      <List
        courses={coursesData}
        activeCourseId={userProgressData?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;
