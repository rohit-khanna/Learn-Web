import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import CourseForm from "./CourseForm";

const newCourse = { id: "", title: "", category: "", authorId: "" };

const ManageCourses = ({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  createCourse,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  useEffect(() => {
    if (courses.length === 0) loadCourses().catch(err => alert("failed"));

    if (authors.length === 0) loadAuthors().catch(err => alert("failed"));
  }, []); // [] only runs once when component mounts

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevState => {
      return {
        ...prevState,
        [name]: name === "authorId" ? parseInt(value, 10) : value
      };
    });
  }

  function handleSave(event) {
    event.preventDefault();
    const currentCourseToSave = course;
    createCourse(currentCourseToSave).catch(err => alert(err));
  }

  return (
    <CourseForm
      course={course}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

function mapsStateToProps({ courses, authors }, ownProps) {
  return {
    course: newCourse,
    courses,
    authors
  };
}

//another way of declaring 'mapDispatchToProps'
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  createCourse: courseActions.createCourse
};

export default connect(mapsStateToProps, mapDispatchToProps)(ManageCourses);
