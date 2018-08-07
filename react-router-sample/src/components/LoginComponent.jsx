import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { fakeAuthentication } from "./dataprovider";

class Login extends Component {
  state = {
    redirectToCaller: false
  };

  authenticate = () => {
    //let self = this;
    fakeAuthentication.authenticate(() => {
      this.setState({ redirectToCaller: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (this.state.redirectToCaller === true) {
      // let path = undefined;
      // if (window.location.search.length > 0) {
      //   path = JSON.parse(
      //     '{"' +
      //       decodeURI(window.location.search.substring(1))
      //         .replace(/"/g, '\\"')
      //         .replace(/&/g, '","')
      //         .replace(/=/g, '":"') +
      //       '"}'
      //   ).redirectUrl;
      //   console.log(path);
      //   return <Redirect to={path == undefined ? "/" : path} />;
      return <Redirect to={from} />;
    }
    return (
      <div style={{ marginTop: 20 }}>
        {!fakeAuthentication.isAuthenticated ? (
          <div>
            <h4>Please login to Proceed</h4>
            <h6> for accessing {from.pathname}</h6>
            <button
              type="button"
              onClick={this.authenticate}
              className="btn btn-primary"
              style={{ cursor: "pointer" }}
              title="Login"
            >
              LOGIN
            </button>
          </div>
        ) : (
          <div>
            <h4 style={{ color: "lightGreen" }}> Logged In</h4>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
