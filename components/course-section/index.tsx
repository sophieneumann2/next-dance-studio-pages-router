import CourseCard from '../course-card';

type Course = {
  course_name: string;
  time: string;
};

interface ICourseSectionProps {
  heading: string;
  courses: Course[];
}

export default function CourseSection({
  heading,
  courses,
}: ICourseSectionProps) {
  return (
    <div className="max-w-screen-md">
      <h2 className="text-lg mb-8">{heading}</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            courseName={course.course_name}
            courseTime={course.time}
          />
        ))}
      </div>
    </div>
  );
}
