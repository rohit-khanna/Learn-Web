import React from "react";
import FallbackComponent from "../FallbackComponent";
import renderer from "react-test-renderer";

test("Fallback Component Tests", () => {
  const component = renderer.create(
    <FallbackComponent errorInfo="error" error="error" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
