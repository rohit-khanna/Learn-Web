import renderer from "react-test-renderer";
import React from "react";
import FallbackComponent from "../components/FallbackComponent";

describe("Fallback Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(
      <FallbackComponent errorInfo="some info" error="some error" />
    );

    expect(tree).toMatchSnapshot();
  });
});
