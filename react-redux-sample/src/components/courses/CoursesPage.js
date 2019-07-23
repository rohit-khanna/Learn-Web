import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    };
  }

  handleChange = event => {
    const newCourse = { ...this.state.course, title: event.target.value };
    this.setState({ course: newCourse });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    //this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        <hr />
        {this.props.courses.map(c => <div key={c.title}>{c.title}</div>)}
      </form>
    );
  }
}

function mapsStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapsStateToProps, mapDispatchToProps)(CoursesPage);
