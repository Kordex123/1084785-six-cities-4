import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {accomodationCount} = props;
  return (
    <Main accomodationCount={accomodationCount}/>
  );
};

App.propTypes = {
  accomodationCount: PropTypes.number.isRequired
};

export default App;
