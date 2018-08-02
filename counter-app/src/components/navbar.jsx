import React, { Component } from "react";
import logo from "../logo.svg";
import AddItem from "./addItem";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleAddItem = val => {
    this.props.onAddItem(val);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
        <img style={{ width: 60 }} src={logo} alt="logo" />
        <span className="navbar-brand">
          <h3 style={{ display: "inline-block" }}>React Demo </h3>
        </span>
        <span className="badge badge-pill badge-secondary">
          {this.props.distinctCounter}
        </span>

        <AddItem onAddItem={this.handleAddItem} />
      </nav>
    );
  }
}

export default Navbar;
