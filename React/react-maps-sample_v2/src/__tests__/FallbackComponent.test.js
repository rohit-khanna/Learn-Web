import { shallow } from "enzyme";
import React from "react";
import FallbackComponent from "../components/FallbackComponent";

function renderFallbackComponent(args) {
  const defaultProps = {
    errorInfo: "",
    error: ""
  };

  const props = { ...defaultProps, ...args };
  return shallow(<FallbackComponent {...props} />);
}

describe("Fallback Component", () => {
  it("renders Fallback component with error details", () => {
    const wrapper = renderFallbackComponent({
      error: "some error",
      errorInfo: { data: "error information" }
    });

    expect(wrapper.find("p").text()).toEqual("some error");
    expect(wrapper.find("details").text()).toEqual(
      JSON.stringify({ data: "error information" })
    );
  });

  it("renders Fallback component with class alert and alert-danger", () => {
    const wrapper = renderFallbackComponent({
      error: "some error",
      errorInfo: { data: "error information" }
    });

    expect(wrapper.find(".alert").length).toBe(1);
    expect(wrapper.find(".alert-danger").length).toBe(1);
  });
});
