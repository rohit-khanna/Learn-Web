import React from "react";
import BaseComponent from "../BaseComponent";
import renderer from "react-test-renderer";

test("BaseComponent Tests", () => {
  const component = renderer.create(BaseComponent(<div />));
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
