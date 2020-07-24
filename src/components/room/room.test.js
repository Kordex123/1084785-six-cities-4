import React from "react";
import renderer from "react-test-renderer";
import Room from "./room.jsx";

it(`Should Room render correctly`, () => {
  const tree = renderer
    .create(<Room
      name={`Accomodation in Marriott`}
      onPlaceClick={() => {}}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
