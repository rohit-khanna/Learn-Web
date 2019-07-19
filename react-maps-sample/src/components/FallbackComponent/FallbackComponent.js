import React from 'react';
import Alert from 'react-bootstrap/Alert';

const FallbackComponent = ({ errorInfo, error }) => {
	return (
		<Alert variant="danger">
			{' '}
			<Alert.Heading>We've got some problem</Alert.Heading>
			<p>{error}</p>
			<p>{JSON.stringify(errorInfo)}</p>
		</Alert>
	);
};

export default FallbackComponent;
