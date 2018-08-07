import React, { Component } from "react";
import Counter from "./counter";

class CountersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("counters-ctor");
  }
  render() {
    console.log("counterS-render");

    return (
      <div>
        {this.props.listOfCounters.map(ctr => (
          <Counter
            key={ctr.id}
            obj={ctr}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            {ctr.desc}
          </Counter>
        ))}
      </div>
    );
  }

  componentDidCatch(error, info) {
    console.log("counterS-componentDidCatch");
  }
  componentDidMount() {
    console.log("counterS-componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("counterS-componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("counterS-componentWillUnmount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("counterS-getSnapshotBeforeUpdate");
    //console.log(prevState);
    return null;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("counterS-shouldComponentUpdate");
  //   //console.log(nextState);
  //   return true;
  // }
}

export default CountersComponent;
