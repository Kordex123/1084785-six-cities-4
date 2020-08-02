import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

it(`Should Room render correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      name={`Accomodation in Marriott`}
      onPlaceClick={() => {}}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
