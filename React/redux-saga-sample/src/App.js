import React, { Component } from "react";
import SearchComponent from "./components/Search";
import UserList from "./components/UserList/";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
//import * as UserActions from "./redux/actions/userAction";
import Spinner from "./components/common/Spinner";
import { FetchUserDetail } from "./redux/actions/userAction";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  handleSubmit = e => {
    e.preventDefault();

    // this.props.actions
    //   .loadUsers(e.target.elements["userID"].value)
    //   .catch(err => alert("err"));
    this.props.store.dispatch(
      FetchUserDetail(e.target.elements["userID"].value)
    );
    // this.setState({ users: data });
  };

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1>Redux-Saga Sample</h1>
        </header>
        <main>
          <SearchComponent onSubmit={this.handleSubmit} />
          {this.props.loading && <Spinner />}
          {!this.props.loading && <UserList users={this.props.users} />}
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
    loading: state.apiCallsInProgress > 0,
    store: ownProps.store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: {
    //   loadUsers: bindActionCreators(UserActions.loadUsers, dispatch)
    // }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
