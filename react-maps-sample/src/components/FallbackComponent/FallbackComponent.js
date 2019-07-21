import React from 'react';
import Alert from 'react-bootstrap/Alert';

const FallbackComponent = ({ errorInfo, error }) => {
	return (
		<Alert variant="danger">
			{' '}
			<Alert.Heading>We&apos;ve got some problem</Alert.Heading>
			<p>{error}</p>
			<details>{JSON.stringify(errorInfo)}</details>
		</Alert>
	);
};

export default FallbackComponent;
