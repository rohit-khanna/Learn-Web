import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MapComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { locationPoints } = this.props;
		return <div>{`${locationPoints[0].startLocation}- ${locationPoints[0].endLocation}`}</div>;
	}
}

export default MapComponent;
