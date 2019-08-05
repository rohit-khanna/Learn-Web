import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getClassNamesForLinks(path) {
    let classNames = "navLink ";
    if (window.location.pathname === path) classNames += "current";
    return classNames;
  }

  render() {
    return (
      <span id="navLinkDiv">
        {this.props.showPipe && <span style={{ marginLeft: 5 }}>|</span>}

        <Link to={this.props.to}>
          <span className={this.getClassNamesForLinks(this.props.to)}>
            {this.props.text}
          </span>
        </Link>
      </span>
    );
  }
}

export default NavLink;
