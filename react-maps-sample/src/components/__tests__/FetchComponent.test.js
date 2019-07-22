import React from "react";
import FetchComponent from "../FetchComponent";
import renderer from "react-test-renderer";

test("FetchComponent Tests", () => {
  const component = renderer.create(<FetchComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
