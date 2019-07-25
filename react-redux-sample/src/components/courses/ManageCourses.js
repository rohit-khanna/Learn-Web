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
  saveCourse,
  history,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  useEffect(
    () => {
      if (courses.length === 0) loadCourses().catch(() => alert("failed"));
      else setCourse({ ...props.course });

      if (authors.length === 0) loadAuthors().catch(() => alert("failed"));
    },
    [props.course]
  ); // [] only runs once when component mounts

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

    if (currentCourseToSave.id)
      saveCourse(currentCourseToSave)
        .then(() => history.push("/courses"))
        .catch(err => alert(err));
    else
      createCourse(currentCourseToSave)
        .then(() => history.push("/courses"))
        .catch(err => alert(err));
  }

  return (
    <CourseForm
      course={course}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      // saving={saving}
    />
  );
};

function mapsStateToProps({ courses, authors }, ownProps) {
  return {
    course: ownProps.match.params.id
      ? courses.find(x => x.id === Number(ownProps.match.params.id))
      : newCourse,
    courses,
    authors
  };
}

//another way of declaring 'mapDispatchToProps'
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  createCourse: courseActions.createCourse,
  saveCourse: courseActions.saveCourse
};

export default connect(mapsStateToProps, mapDispatchToProps)(ManageCourses);
