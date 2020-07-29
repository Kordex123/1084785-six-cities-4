import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Should App render correctly`, () => {
  const hotelsApp = {
    description: [`Ala ma kota`, ``, `<Test />`]
  };

  const tree = renderer.
    create(<App
      accomodationCount={287}
      hotels={hotelsApp}
    />).
  toJSON();

  expect(tree).toMatchSnapshot();
});
