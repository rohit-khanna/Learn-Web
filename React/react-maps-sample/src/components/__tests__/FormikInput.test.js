import React from "react";
import FormikInput from "../FormikInput";
import renderer from "react-test-renderer";

test("FormikInput Tests", () => {
  const component = renderer.create(
    <FormikInput field={{ name: "startLocation" }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
