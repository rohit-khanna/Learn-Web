import React from "react";
import Alert from "react-bootstrap/Alert";

/**
 * Fallback component, in case of unexpected error from any React Element
 * @param {*} param0 
 */
const FallbackComponent = ({ errorInfo, error }) => {
  return (
    <Alert variant="danger">
      {" "}
      <Alert.Heading>We&apos;ve got some problem</Alert.Heading>
      <p>{error}</p>
      <details>{JSON.stringify(errorInfo)}</details>
    </Alert>
  );
};

export default FallbackComponent;
