import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { Link, Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  componentDidMount() {
    if (this.props.courses.length === 0)
      this.props.actions.loadCourses().catch(err => alert("failed"));

    if (this.props.authors.length === 0)
      this.props.actions.loadAuthors().catch(err => alert("failed"));
  }

  render() {
    return (
      <React.Fragment>
        <h3>Courses</h3>{" "}
        <Link to="/course" className="btn btn-primary btn-sm ">
          Create New Course
        </Link>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <CourseList
            courses={this.props.courses}
            authors={this.props.authors}
          />
        )}
      </React.Fragment>
    );
  }
}

function mapsStateToProps(state, ownProps) {
  return {
    courses:
      state.courses.length > 0
        ? state.courses.map(course => {
            return {
              ...course,
              authorName:
                state.authors.length > 0 &&
                state.authors.find(x => x.id === course.authorId).name
            };
          })
        : [],
    authors: state.authors.length > 0 ? state.authors : [],
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(mapsStateToProps, mapDispatchToProps)(CoursesPage);
