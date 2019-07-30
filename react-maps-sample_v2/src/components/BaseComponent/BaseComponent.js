import React, { Component } from "react";
import FallbackComponent from "../FallbackComponent";

/**
 * HOC: Base component. It Adds Error Handling capabilities and shows a fallback component
 * in case of error
 * @param {*} AppComponent Component
 */
const BaseComponent = AppComponent => {
  return class InnerBase extends Component {
    //contructor
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null, errorInfo: "" };
    }

    /**
	* Life cycle method called when exception is caught
	 * @param {*} error eoor details
	 * @param {*} errorInfo error stack trace
	 */
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error && error.message,
        errorInfo: errorInfo,
        hasError: true
      });
    }

    render() {
      const { error, hasError, errorInfo } = this.state;
      if (hasError)
        return <FallbackComponent errorInfo={errorInfo} error={error} />;
      return <AppComponent {...this.props} />;
    }
  };
};

export default BaseComponent;
