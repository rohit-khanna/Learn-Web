import React from "react";
import { mount, shallow } from "enzyme";
import UnControlledInput from "../components/common/uncontrolledInput";

jest.mock("../services");

function renderUncontrolledInput(args) {
  const defaultProps = {
    name: "test",
    label: "test",
    value: "",
    handleClearClick: () => {},
    handleChange: () => {},
    inProgress: false
  };

  const props = { ...defaultProps, ...args };

  return shallow(<UnControlledInput {...props} />);
}

describe("<UnControlledInput/>", () => {
  it("should show autocomplete list when showDataList is set to true on State", () => {
    const wrapper = renderUncontrolledInput();
    wrapper.setState({ showDataList: true });
    expect(wrapper.find(".dataList").length).toBe(1);
  });

  it("should fire handleChange once an item is selected from autoComplete List", () => {
    const handleChangeMock = jest.fn();
    const wrapper = renderUncontrolledInput({ handleChange: handleChangeMock });

    wrapper.setState({ dataList: ["some place"], showDataList: true });
    wrapper
      .find(".dataList")
      .simulate("click", { target: { textContent: "india" } });

    expect(handleChangeMock.call.length).toBe(1);
  });

  it("should set the state to selected Value and hide autoComplete List", () => {
    const wrapper = renderUncontrolledInput();
    wrapper.setState({ dataList: ["some place"], showDataList: true });
    wrapper
      .find(".dataList")
      .simulate("click", { target: { textContent: "india" } });

    expect(wrapper.state().inputValue).toBe("india") &&
      expect(wrapper.find(".dataList").length).toBe(0);
  });
});
