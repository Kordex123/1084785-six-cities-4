import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";

const init = () => {
  const hotel = {
    description: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood2 and stone place`],
    // previewImage: `apartment-01.jpg`
  };
  const settings = {
    accomodations: 123
  };
  ReactDOM.render(<App
    accomodationCount={settings.accomodations}
    hotels={hotel}
  />, document.getElementById(`root`));
};

init();
