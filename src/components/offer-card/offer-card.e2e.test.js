import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockRoom = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatarUrl: `./../img/avatar.svg`,
    id: 3,
    isPro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`./../img/apartment-02.jpg`, `./../img/apartment-03.jpg`],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `./../img/apartment-01.jpg`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};

it(`Should Room hover simulate correctly`, () => {
  const onRoomHover = jest.fn();
  const offerCard = shallow(
      <OfferCard
        room={mockRoom}
        onRoomHover={onRoomHover}
      />
  );

  const article = offerCard.find(`.place-card`);
  article.simulate(`mouseover`);

  expect(onRoomHover.mock.calls.length).toBe(1);
});
