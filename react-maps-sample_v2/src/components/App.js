import React, { Component } from "react";
import SearchForm from "./searchForm/SearchForm";
import ResultDisplay from "./resultDisplay/ResultDisplay";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRoute } from "../redux/actions/routeActions";
import MapComponent from "./map/MapComponent";
import { PlacesService } from "../services";

const INITIAL_VALUE = { startLocation: "", endLocation: "" };
const placesEndpoint = process.env.PLACES_API_URL;

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

  handleChange = (name, value) => {
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
    actions.routes(startLocation, endLocation);
  };

  render() {
    const { formValues } = this.state;
    const { loading, routeResult } = this.props;

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
            {!loading && routeResult.error && (
              <div className="alert alert-danger">{routeResult.error} </div>
            )}

            {routeResult.status === "success" && (
              <ResultDisplay
                totalDistance={routeResult.total_distance}
                totalTime={routeResult.total_time}
              />
            )}
          </SearchForm>
        </section>
        <section className="col-md-8">
          <MapComponent
            key={
              this.props.routeResult.path
                ? this.props.routeResult.path.length
                : 0
            }
            isMarkerShown
            googleMapURL={process.env.MAP_API_URL.toString()}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            markers={this.props.routeResult ? this.props.routeResult.path : []}
          />
        </section>
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
