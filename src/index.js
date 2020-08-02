import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const init = () => {
  // const hotel = {
  //   description: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood2 and stone place`],
  //   // previewImage: `apartment-01.jpg`
  // };
  const Settings = {
    ACCOMODATION_COUNT: 123
  };
  ReactDOM.render(<App
    accomodationCount={Settings.ACCOMODATION_COUNT}
    accomodationOffers={offers}
  />, document.getElementById(`root`));
};

init();
