import React from "react";
import CourseItem from "./CourseItem";

const CourseList = ({ courses, authors }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((c, idx) => (
          <CourseItem key={c.id} item={c} index={idx} />
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
