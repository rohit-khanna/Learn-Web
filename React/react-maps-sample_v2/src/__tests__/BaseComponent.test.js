import React from "react";
import BaseComponent from "../components/BaseComponent";
import FallbackComponent from "../components/FallbackComponent";
import { shallow, mount } from "enzyme";

describe("<BaseComponent/>", () => {
  it("returns Fallback component, when some error is present", () => {
    const ConditionalHOC = BaseComponent(HollowComponent);

    const wrapper = shallow(<ConditionalHOC />);
    wrapper.setState({
      hasError: true,
      error: "error",
      errorInfo: "error info"
    });
    expect(
      wrapper.containsMatchingElement(
        <FallbackComponent errorInfo="error info" error="error" />
      )
    ).toEqual(true);
  });

  it("returns Hollow component, when No error is present", () => {
    const ConditionalHOC = BaseComponent(HollowComponent);

    const wrapper = shallow(<ConditionalHOC />);
    wrapper.setState({
      hasError: false,
      error: "",
      errorInfo: ""
    });

    expect(wrapper.containsMatchingElement(<HollowComponent />)).toEqual(true);
  });
});

const HollowComponent = () => <h1>Hola</h1>;
