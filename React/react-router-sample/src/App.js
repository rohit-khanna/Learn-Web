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
import Register from "./components/registerComponent";
import { fakeAuthentication } from "./components/dataprovider";
import NavLink from "./components/navLinkComponent";

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
              <NavLink to="/" showPipe={false} text="Home" />
              <NavLink to="/books" showPipe={true} text="Books" />
              <NavLink to="/register" showPipe={true} text="Register" />
              <NavLink to="/about" showPipe={true} text="About" />
              <NavLink to="/admin" showPipe={true} text="Protected-Admin" />
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
              <Route path="/register" component={Register} />
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
