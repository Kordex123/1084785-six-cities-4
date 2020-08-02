import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import render from "enzyme/src/render";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {accomodationCount, accomodationOffers} = this.props;
    return (
      <Main
        accomodationCount={accomodationCount}
        accomodationOffers={accomodationOffers}
      />
    );
  }
}

App.propTypes = {
  accomodationCount: PropTypes.number.isRequired,
  accomodationOffers: PropTypes.array.isRequired
};

