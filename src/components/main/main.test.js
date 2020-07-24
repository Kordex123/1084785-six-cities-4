import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Should Main render correctly`, () => {
  const hotels1 = {
    description: [`Pomarańczowy hamak`, `Karpeduza`]
  };

  const tree1 = renderer.
    create(<Main
      accomodationCount={45}
      hotels={hotels1}
    />).
  toJSON();

  expect(tree1).toMatchSnapshot();
});
