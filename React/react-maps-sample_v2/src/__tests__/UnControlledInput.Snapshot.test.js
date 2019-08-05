import React from "react";
import renderer from "react-test-renderer";
import UnControlledInput from "../components/common/uncontrolledInput";

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

  return renderer.create(<UnControlledInput {...props} />);
}

describe("<UnControlledInput/>", () => {
  it("should match the Snapshot when autocomplete list is hidden", () => {
    const tree = renderUncontrolledInput();
    expect(tree).toMatchSnapshot();
  });

  it("should match the Snapshot when autocomplete list is shown", () => {
    const tree = renderUncontrolledInput();
    const instance = tree.root.instance;
    instance.setState({ dataList: ["some place"], showDataList: true });
    expect(tree).toMatchSnapshot();
  });
});
