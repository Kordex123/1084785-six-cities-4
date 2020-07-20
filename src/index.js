import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    accomodations: 123
  };
  ReactDOM.render(<App accomodationCount={settings.accomodations}/>, document.getElementById(`root`));
};

init();
