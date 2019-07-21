import React, { Component } from 'react';
import './App.css';
import ContainerComponent from './components/ContainerComponent';
import SearchComponent from './components/SearchComponent';
import MapComponent from './components/MapComponent';
import FetchComponent from './components/FetchComponent';
import { BACKEND_URL, MAP_API_KEY } from './config';

const INITIAL_STATE = {
	locationObj: { startLocation: '', endLocation: '' },
	info: '',
	hasError: false,
	isApiCallInProgress: false,

	result: {
		status: '',
		path: [],
		total_distance: '',
		total_time: '',
		error: ''
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = INITIAL_STATE;
	}

	handleDataChange = ({ isFetching, data, error }) => {
		if (error) {
			this.setState({
				isApiCallInProgress: false,
				hasError: true,
				info: error,
				result: {}
			});
		} else if (isFetching) {
			this.setState({ isApiCallInProgress: true, info: 'Still Fetching...', result: {} });
		} else if (data) {
			this.setState({ isApiCallInProgress: false, hasError: false, info: '', result: data });
		}
	};

	handleReset = () => {
		this.setState(INITIAL_STATE);
	};
	render() {
		const { locationObj: { startLocation, endLocation }, info, hasError, isApiCallInProgress, result } = this.state;

		return (
			<ContainerComponent>
				<SearchComponent
					handleLocationSubmit={({ startLocation, endLocation }) =>
						this.setState({
							locationObj: { startLocation, endLocation },
							isApiCallInProgress: true,
							hasError: false,
							info: 'Fetching...'
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
				<MapComponent
					key={result.path ? result.path.length : 0}
					isMarkerShown
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MAP_API_KEY}&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `100vh` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					markers={result.path}
				/>
				{isApiCallInProgress && (
					<FetchComponent
						url={BACKEND_URL}
						route="route"
						data={{ origin: startLocation, destination: endLocation }}
						handleDataChange={this.handleDataChange}
						key={info}
					/>
				)}
			</ContainerComponent>
		);
	}
}

export default App;
