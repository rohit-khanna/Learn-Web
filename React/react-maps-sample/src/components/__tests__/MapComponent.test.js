import React from "react";
import MapComponent from "../MapComponent";
import renderer from "react-test-renderer";

test("Map Component Tests", () => {
  const component = renderer.create(
    <MapComponent
      googleMapURL="http:\\google.com"
      isMarkerShown
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      markers={[]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
