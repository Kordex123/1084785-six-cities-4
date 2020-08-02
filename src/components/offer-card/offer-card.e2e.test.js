import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Room click simulate correctly`, () => {
  const onPlaceClick = jest.fn();

  const room = shallow(
      <OfferCard
        name={`Sobieski`}
        onPlaceClick={onPlaceClick}
      />
  );

  const article = room.find(`.place-card`);
  article.simulate(`click`);

  expect(onPlaceClick.mock.calls.length).toBe(1);
});
