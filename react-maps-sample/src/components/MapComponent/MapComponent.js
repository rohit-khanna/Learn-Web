import React from 'react';
import { compose, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';

const MapComponent = compose(
	withScriptjs,
	withGoogleMap,
	lifecycle({
		componentDidMount() {
			//const DirectionsService = new window.google.maps.DirectionsService();
			//const { markers } = this.props;
			// DirectionsService.route(
			// 	{
			// 		origin: { lat: Number(markers[0][0]), lng: Number(markers[0][1]) },
			// 		destination: { lat: Number(markers[1][0]), lng: Number(markers[1][1]) },
			// 		//waypoints: [ { location: { lat: 41.85258, lng: -87.6514 }, stopover: false } ],
			// 		travelMode: window.google.maps.TravelMode.DRIVING
			// 	},
			// 	(result, status) => {
			// 		if (status === window.google.maps.DirectionsStatus.OK) {
			// 			this.setState({
			// 				directions: result
			// 			});
			// 		} else {
			// 			console.error(`error fetching directions ${result}`);
			// 		}
			// 	}
			// );
		}
	})
)((props) => (
	<GoogleMap
		zoom={12}
		center={
			props.markers && props.markers.length > 2 ? (
				{ lat: Number(props.markers[1][0]), lng: Number(props.markers[1][1]) }
			) : (
				{ lat: 28.7417623, lng: 77.1370109 }
			)
		}
	>
		{props.markers &&
			props.markers.map((marker, idx) => (
				<Marker key={idx} position={{ lat: Number(marker[0]), lng: Number(marker[1]) }} />
			))}
	</GoogleMap>
));

export default MapComponent;
