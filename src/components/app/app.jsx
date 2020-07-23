import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {accomodationCount, hotels} = props;
  return (
    <Main
      accomodationCount={accomodationCount}
      hotels={hotels}
    />
  );
};

App.propTypes = {
  accomodationCount: PropTypes.number.isRequired,
  hotels: PropTypes.shape({
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  })
};

export default App;
