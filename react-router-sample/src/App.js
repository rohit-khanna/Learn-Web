import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/aboutComponent";
import Books from "./components/bookComponent";

class App extends Component {
  getClassNamesForLinks(path) {
    let classNames = "navLink ";
    //  console.log(path, window.location.pathname);
    //if (window.location.pathname == path) classNames += " current";
    return classNames;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React-routing Sample</h1>

            <nav>
              <Link to="/">
                <span className={this.getClassNamesForLinks("/")}>Home</span>
              </Link>
              <span style={{ marginLeft: 5 }}>|</span>
              <Link to="/books">
                <span className={this.getClassNamesForLinks("/books")}>
                  Books
                </span>
              </Link>
              <span style={{ marginLeft: 5 }}>|</span>
              <Link to="/about">
                <span className={this.getClassNamesForLinks("/about")}>
                  About Us
                </span>
              </Link>
            </nav>
          </header>
          <main>
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => {
                  return (
                    <h3 style={{ color: "black", marginTop: 50 }}>
                      Welcome to the Home page
                    </h3>
                  );
                }}
              />
              <Route path="/about" component={About} />
              <Route path="/books" component={Books} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
