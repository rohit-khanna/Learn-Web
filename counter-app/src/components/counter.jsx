import React, { Component } from "react";

import { FaPlus, FaMinus, FaTrash, FaSyncAlt } from "react-icons/fa";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("counter-ctor");
  }

  state = {};
  render() {
    //console.log("props", this.props);
    console.log("counter-render", this.props.obj.id);
    return (
      <div style={{ padding: 5, margin: 15 }}>
        <button
          title="Increment"
          onClick={() => this.props.onIncrement(this.props.obj)}
          className=" btn btn-success btn-sm m-2"
        >
          <FaPlus />
        </button>
        <button
          title="Decrement"
          onClick={() => this.props.onDecrement(this.props.obj)}
          className={this.getDecrementClass()}
        >
          <FaMinus />
        </button>
        <button
          title="Delete"
          onClick={() => this.props.onDelete(this.props.obj.id)}
          className="btn btn-danger btn-sm m-2"
        >
          <FaTrash />
        </button>
        <button
          title="reset count"
          className="btn btn-sm btn-primary m-2"
          onClick={() => this.props.onReset(this.props.obj.id)}
        >
          <FaSyncAlt />
        </button>

        <span
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginLeft: 10
          }}
        >
          {this.props.children}
        </span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
    );
  }

  getDecrementClass() {
    let classes = "btn btn-secondary btn-sm m-2";
    if (this.props.obj.count <= 0) classes += " disabled";
    return classes;
  }
  componentDidCatch(error, info) {
    console.log("counter-componentDidCatch");
  }
  componentDidMount() {
    console.log("counter-componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("counter-componentDidUpdate");
  }
  // //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  // //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps");
  // }
  // //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  // componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate");
  // }
  componentWillUnmount() {
    console.log("counter-componentWillUnmount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("counter-getSnapshotBeforeUpdate");
    //console.log(prevState);
    return null;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("counter-shouldComponentUpdate");
  //   //console.log(nextState);
  //   return true;
  // }

  /**
   * method to format the count
   */
  formatCount() {
    const { count } = this.props.obj;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-lg badge-";
    classes += this.props.obj.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
