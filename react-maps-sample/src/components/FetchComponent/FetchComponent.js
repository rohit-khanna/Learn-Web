import React, { Component } from 'react';

class FetchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: false,
			data: '',
			error: ''
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	fetchRouteToken = async (url, route, data) => {
		try {
			const response = await fetch(url + route, {
				method: 'post',
				body: JSON.stringify(data),
				headers: { 'Content-Type': 'application/json' }
			});

			if (!response.ok) {
				throw new Error(response.status);
			}
			return await response.json();
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	getRoute = async (url, route, token) => {
		try {
			const response = await fetch(url + route + '/' + token, {
				method: 'get',
				headers: { 'Content-Type': 'application/json' }
			});

			if (!response.ok) {
				throw new Error(response.status);
			}
			return await response.json();
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	async componentDidMount() {
		console.log('CDM');
		const { url, data, route } = this.props;
		this.setState({ isFetching: true }, async () => {
			const dataResponse = await this.fetchRouteToken(url, route, data);

			if (dataResponse) {
				const response = await this.getRoute(url, route, dataResponse.token);

				if (response) {
					const { status, path, total_distance, total_time, error } = response;

					if (error) {
						this.setState({ error, isFetching: false }, () => this.props.handleDataChange(this.state));
					} else if (status === 'in progress') {
						console.log('API-STATUS is IN_PROGRESS');
					} else if (status === 'failure') {
						this.setState({ isFetching: false, data: {}, error });
					} else {
						const entity = {
							status,
							path,
							total_distance,
							total_time,
							error
						};
						this.setState({ isFetching: false, data: entity, error: '' });
					}
				}
			}
			this.props.handleDataChange(this.state);
		});
	}

	render() {
		return '';
	}
}

export default FetchComponent;
