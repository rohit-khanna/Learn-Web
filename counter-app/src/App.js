import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App- ctor");
  }

  state = {
    listOfCounters: [
      { id: 1, count: 0, desc: "TShirt" },
      { id: 2, count: 0, desc: "Jeans" },
      { id: 3, count: 0, desc: "Coffee Mug" },
      { id: 4, count: 0, desc: "XBox" }
    ]
  };

  handleDelete = counterId => {
    const listOfCounters = this.state.listOfCounters.filter(
      x => x.id !== counterId
    );
    this.setState({ listOfCounters });
  };

  handleReset = counterId => {
    //alert(counterId);
    const listOfCounters = this.state.listOfCounters.map(x => {
      if (x.id === counterId) x.count = 0;
      return x;
    });
    this.setState({ listOfCounters });
  };

  handleIncrement = counterObj => {
    const listOfCounters = this.state.listOfCounters;
    const indx = listOfCounters.indexOf(counterObj);
    listOfCounters[indx].count++;

    // const listOfCounters = this.state.listOfCounters.map(x => {
    //   if (x.id === counterObj.id) x.count += 1;
    //   return x;
    // });
    this.setState({ listOfCounters });
  };

  handleDecrement = counterObj => {
    if (counterObj.count > 0) {
      const listOfCounters = this.state.listOfCounters;
      const indx = listOfCounters.indexOf(counterObj);

      listOfCounters[indx].count--;
      // const listOfCounters = this.state.listOfCounters.map(x => {
      //   if (x.id === counterObj.id) x.count -= 1;
      //   return x;
      // });
      this.setState({ listOfCounters });
    }
  };
  render() {
    console.log("App-render");

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
          <span className="navbar-brand">
            <b>React Demo </b>: Kind of Shopping Cart
          </span>
          <span className="badge badge-pill badge-secondary">
            {this.state.listOfCounters.filter(x => x.count > 0).length}
          </span>
        </nav>
        <main role="main" className="container">
          <Counters
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            listOfCounters={this.state.listOfCounters}
          />
        </main>
      </div>
    );
  }

  componentDidCatch(error, info) {
    console.log("App-componentDidCatch");
  }
  componentDidMount() {
    console.log("App-componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("App-componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App-componentWillUnmount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("App-getSnapshotBeforeUpdate");
    //console.log(prevState);
    return null;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("App-shouldComponentUpdate");
  //   //console.log(nextState);
  //   return true;
  // }
}

export default App;
