import React, { Component } from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/aboutComponent";
import Books from "./components/bookComponent";
import Login from "./components/LoginComponent";
import Secured from "./components/securedComponent";
import { fakeAuthentication } from "./components/dataprovider";

class App extends Component {
  getClassNamesForLinks(path) {
    let classNames = "navLink ";
    //  console.log(path, window.location.pathname);
    //if (path === "/admin") classNames += " current";
    return classNames;
  }

  render() {
    console.log("rednder");
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> react-routing-sample</h1>

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
              <span style={{ marginLeft: 5 }}>|</span>
              <Link to="/admin">
                <span className={this.getClassNamesForLinks("/admin")}>
                  Protected-ADMIN
                </span>
              </Link>
              <span style={{ marginLeft: 25 }}>&nbsp;</span>
              <AuthButton />
            </nav>
          </header>
          <main>
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => {
                  return (
                    <h1 style={{ color: "#271C1A", marginTop: 50 }}>
                      Welcome to the Home page
                    </h1>
                  );
                }}
              />
              <Route path="/about" component={About} />
              <Route path="/books" component={Books} />
              <Route path="/login" component={Login} />
              <PrivateRoute securedPath="/admin" component={Secured} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({ component: C, securedPath }) => (
  <Route
    securedPath={securedPath}
    render={props =>
      fakeAuthentication.isAuthenticated === true ? (
        <C {...props} redirectPath={securedPath} />
      ) : (
        // <Redirect to={`/login?redirectUrl=${securedPath}`} />
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuthentication.isAuthenticated ? (
      <span style={{ right: 25, position: "absolute" }}>
        Welcome!{" "}
        <button
          className="btn btn-link btn-sm"
          onClick={() => {
            fakeAuthentication.signout(() => history.push("/"));
          }}
        >
          <h5>Sign Out</h5>
        </button>
      </span>
    ) : (
      <Link to="/login" style={{ right: 25, position: "absolute" }}>
        <h5>Login</h5>
      </Link>
    )
);

export default App;
