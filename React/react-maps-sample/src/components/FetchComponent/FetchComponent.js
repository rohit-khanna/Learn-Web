import { Component } from "react";
import { MyService } from "../../services";

/**
 * Fetch Component to make Api calls for Map
 */
class FetchComponent extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: "",
      error: ""
    };
  }

  /**
   * fetches data from API's
   */
  fetchDataForMap = async () => {
    const { url, data, route } = this.props;
    try {
      const response = await MyService.fetchRoutePositions(url, route, data);
      const { status, path, total_distance, total_time, error } = response;

      if (error) {
        this.setState({ error, isFetching: false });
      } else if (status === "failure") {
        this.setState({ isFetching: false, data: {}, error });
      } else if (status === "in progress") {
        this.setState({ isFetching: true, data: {}, error: "" });
      } else {
        const entity = {
          status,
          path,
          total_distance,
          total_time,
          error
        };
        this.setState({ isFetching: false, data: entity, error: "" });
      }
    } catch (e) {
      this.setState({ isFetching: false, data: {}, error: e });
    }
    this.props.handleDataChange(this.state);
  };

  /**
   * Life cycle method, invoked when component is mounted
   */
  async componentDidMount() {
    this.setState({ isFetching: true }, async () => {
      this.fetchDataForMap();
    });
  }

  render() {
    return "";
  }
}

export default FetchComponent;
