import React, { Component } from 'react';
import FallbackComponent from '../FallbackComponent';

const BaseComponent = (AppComponent) => {
	return class InnerBase extends Component {
		constructor(props) {
			super(props);
			this.state = { hasError: false, error: null, errorInfo: '' };
		}

		componentDidCatch(error, errorInfo) {
			this.setState({
				error: error && error.message,
				errorInfo: errorInfo,
				hasError: true
			});
		}

		render() {
			const { error, hasError, errorInfo } = this.state;
			if (hasError) return <FallbackComponent errorInfo={errorInfo} error={error} />;
			return <AppComponent {...this.props} />;
		}
	};
};

export default BaseComponent;
