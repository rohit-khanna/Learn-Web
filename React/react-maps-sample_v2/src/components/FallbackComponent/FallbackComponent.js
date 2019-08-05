import React from "react";

/**
 * Fallback component, in case of unexpected error from any React Element
 * @param {*} param0
 */
const FallbackComponent = ({ errorInfo, error }) => {
  return (
    <div className="alert alert-danger">
      <div className="alert-heading">We&apos;ve got some problem</div>
      <p>{error}</p>
      <details>{JSON.stringify(errorInfo)}</details>
    </div>
  );
};

export default FallbackComponent;
