import { Component } from 'react';

class FetchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: false,
			data: '',
			error: ''
		};
	}

	fetchData = async (url, method, data) => {
		const payLoad = {
			method: method,
			headers: { 'Content-Type': 'application/json' }
		};

		if (data) payLoad.body = JSON.stringify(data);

		try {
			const response = await fetch(url, payLoad);
			if (!response.ok) {
				switch (response.status) {
					case 500:
						throw new Error('Internal Service Error');
					case 400:
						throw new Error('Not Found Error');
					default:
						throw new Error(response.status);
				}
			}
			return await response.json();
		} catch (excep) {
			this.setState({ error: excep.message });
		}
	};

	fetchRouteToken = async (url, route, data) => {
		return await this.fetchData(url + route, 'POST', data);
	};

	getRoute = async (url, route, token) => {
		return await this.fetchData(url + route + '/' + token, 'GET');
	};

	async componentDidMount() {
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
						//console.log('API-STATUS is IN_PROGRESS');
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
