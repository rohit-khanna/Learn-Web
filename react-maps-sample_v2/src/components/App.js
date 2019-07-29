import React, { Component } from "react";
import SearchForm from "./searchForm/SearchForm";
import ResultDisplay from "./resultDisplay/ResultDisplay";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRoute } from "../redux/actions/routeActions";

const INITIAL_VALUE = { startLocation: "", endLocation: "" };

class App extends Component {
  state = {
    formValues: INITIAL_VALUE
  };

  handleClearClick = ({ name }) => {
    this.setState(prevState => ({
      formValues: {
        ...prevState.formValues,
        [name]: ""
      }
    }));
  };

  handleReset = () => {
    this.setState({ formValues: INITIAL_VALUE });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      formValues: {
        ...prevState.formValues,
        [name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { actions } = this.props;
    const { startLocation, endLocation } = this.state.formValues;
    const dd = actions.routes(startLocation, endLocation);
  };

  render() {
    const { formValues } = this.state;
    const { loading } = this.props;

    return (
      <div className="container row">
        <section className="col-md-4">
          <SearchForm
            formValues={formValues}
            handleClearClick={this.handleClearClick}
            handleReset={this.handleReset}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            inProgress={loading}
          >
            {this.props.routeResult && this.props.routeResult.error}
            {this.props.routeResult.status === "success" && (
              <ResultDisplay
                totalDistance={this.props.routeResult.total_distance}
                totalTime={this.props.routeResult.total_time}
              />
            )}
          </SearchForm>
        </section>
        <section className="col-md-auto"> {JSON.stringify(this.props)}</section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      routes: bindActionCreators(fetchRoute, dispatch)
    }
  };
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.apiCallsInProgress > 0,
    routeResult: state.routeResult
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
