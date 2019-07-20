import React, { Component } from 'react';
import './App.css';
import ContainerComponent from './components/ContainerComponent';
import SearchComponent from './components/SearchComponent';
import MapComponent from './components/MapComponent';
import FetchComponent from './components/FetchComponent';
import { BACKEND_URL } from './config';

class App extends Component {
	constructor() {
		super();
		this.state = {
			locationObj: { startLocation: '', endLocation: '' },
			info: '',
			hasError: false,
			isApiCallInProgress: false,

			result: {
				status: '',
				path: [ [ '0.0', '0.2' ] ],
				total_distance: '',
				total_time: '',
				error: ''
			}
		};
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
	render() {
		const { locationObj, info, hasError, isApiCallInProgress, result } = this.state;

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
						startLocation: '',
						endLocation: '',
						isApiCallInProgress: this.state.isApiCallInProgress,
						result: {
							total_distance: '',
							total_time: ''
						}
					}}
					info={info}
					hasError={hasError}
				/>
				<MapComponent locationPoints={result.path} />
				{isApiCallInProgress && (
					<FetchComponent
						url={BACKEND_URL}
						route="route"
						data={{ origin: locationObj.startLocation, destination: locationObj.endLocation }}
						handleDataChange={this.handleDataChange}
						key={info}
					/>
				)}
				)}
			</ContainerComponent>
		);
	}
}

export default App;
