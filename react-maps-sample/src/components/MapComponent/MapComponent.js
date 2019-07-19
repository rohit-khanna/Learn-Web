import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MapComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { locationPoints } = this.props;
		if (locationPoints)
			return locationPoints.map((x, idx) => {
				return <p key={idx}>{`${x[0]}- ${x[1]}`}</p>;
			});
		return '';
	}
}

export default MapComponent;
