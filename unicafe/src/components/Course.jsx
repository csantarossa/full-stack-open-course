import { Header, Content } from "../App";

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => {
        const total = course.parts.reduce((sum, obj) => sum + obj.exercises, 0);
        return (
          <div key={course.id}>
            <Header header={course.name} />
            <Content parts={course.parts} />
            <p>
              <strong>Total of {!total ? 0 : total} exercises</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
