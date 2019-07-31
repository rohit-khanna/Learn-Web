import React from "react";
import ResultDisplay from "../components/resultDisplay";
import renderer from "react-test-renderer";

describe("<ResultDisplay/>", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(
      <ResultDisplay totalDistance={1000} totalTime={180} />
    );

    expect(tree).toMatchSnapshot();
  });
});
