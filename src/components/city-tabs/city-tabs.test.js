import React from "react";
import renderer from "react-test-renderer";
import CityTabs from "./city-tabs";

const mockCityNames = [`Amsterdam`, `Zurich`, `Moscow`, `Kabul`];

it(`Should CityTabs render correctly`, () => {
  const tree1 = renderer
    .create(
        <CityTabs
          cityNames={mockCityNames}
        />
    )
    .toJSON();

  expect(tree1).toMatchSnapshot();
});
