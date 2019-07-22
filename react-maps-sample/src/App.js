import React, { Component } from "react";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchComponent from "./components/SearchComponent";
import MapComponent from "./components/MapComponent";
import FetchComponent from "./components/FetchComponent";
import { BACKEND_URL, MAP_API_URL } from "./config";

/**
 * Initial state
 */
const INITIAL_STATE = {
  locationObj: { startLocation: "", endLocation: "" },
  info: "",
  hasError: false,
  isApiCallInProgress: false,

  result: {
    status: "",
    path: [],
    total_distance: "",
    total_time: "",
    error: ""
  }
};

/**
 * Main component
 */
class App extends Component {
  //constructor
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  /**
   * handler for data change in Searcg Component
   */
  handleDataChange = ({ isFetching, data, error }) => {
    if (error) {
      this.setState({
        isApiCallInProgress: false,
        hasError: true,
        info: error,
        result: {}
      });
    } else if (isFetching) {
      this.setState({
        isApiCallInProgress: true,
        info: "Still Fetching...",
        result: {}
      });
    } else if (data) {
      this.setState({
        isApiCallInProgress: false,
        hasError: false,
        info: "",
        result: data
      });
    }
  };

  /**
   * Handler to reset the Search Component
   */
  handleReset = () => {
    this.setState(INITIAL_STATE);
  };

  /**
   * Render Method
   */
  render() {
    const {
      locationObj: { startLocation, endLocation },
      info,
      hasError,
      isApiCallInProgress,
      result
    } = this.state;

    return (
      <React.Fragment>
        <Row>
          <Col lg={3} md={6} xs={12}>
            <SearchComponent
              handleLocationSubmit={({ startLocation, endLocation }) =>
                this.setState({
                  locationObj: { startLocation, endLocation },
                  isApiCallInProgress: true,
                  hasError: false,
                  info: "Fetching..."
                })}
              initialValues={{
                startLocation,
                endLocation,
                isApiCallInProgress: isApiCallInProgress,
                result: result
              }}
              info={info}
              hasError={hasError}
              handleReset={this.handleReset}
            />
          </Col>
          <Col>
            <MapComponent
              key={result.path ? result.path.length : 0}
              isMarkerShown
              googleMapURL={MAP_API_URL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              markers={result.path}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            {isApiCallInProgress && (
              <FetchComponent
                url={BACKEND_URL}
                route="route"
                data={{ origin: startLocation, destination: endLocation }}
                handleDataChange={this.handleDataChange}
                key={info}
              />
            )}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default App;
