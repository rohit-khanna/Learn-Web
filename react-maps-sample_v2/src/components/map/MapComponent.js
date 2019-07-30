import React from "react";
import BaseComponent from "../BaseComponent";
import { MapService } from "../../services";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  //Marker,
  DirectionsRenderer
} from "react-google-maps";

/**
 * Inner class For Map Component
 */
class MapComponentInner extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      directions: ""
    };
  }

  /**
   * Lifecycle method invoked once component is mounted
   */
  async componentDidMount() {
    const { markers } = this.props;
    if (markers && markers.length > 2) {
      const [start, ...rest] = markers;
      const [end] = rest.slice(-1);

      try {
        // const directions = await MapService.FetchDirections(
        //   {
        //     lat: start[0],
        //     lng: start[1]
        //   },
        //   {
        //     lat: end[0],
        //     lng: end[1]
        //   },
        //   (markers.length > 2 ? rest.slice(0, markers.length - 2) : []).map(
        //     wayPoint => {
        //       return {
        //         lat: wayPoint[0],
        //         lng: wayPoint[1]
        //       };
        //     }
        //   )
        // );
        // this.setState({ directions });
      } catch (error) {
        alert(error);
      }
    }
  }

  /**
   * Renders the Google Map
   */
  render() {
    const { markers } = this.props;
    const { directions } = this.state;
    return (
      <GoogleMap
        zoom={12}
        center={
          markers && markers.length > 2
            ? { lat: Number(markers[1][0]), lng: Number(markers[1][1]) }
            : { lat: 28.7417623, lng: 77.1370109 }
        }
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    );
  }
}

// Wraping the inner component with Google Scripts, to setup the necesary wrappers for Maps
const MapComponent = withScriptjs(
  withGoogleMap(BaseComponent(MapComponentInner))
);

export default MapComponent;
