import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferDetails from "../offer-details/offer-details.jsx";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {accomodationCount, accomodationOffers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              accomodationCount={accomodationCount}
              accomodationOffers={accomodationOffers}
            />
          </Route>
          <Route
            exact path="/dev-offerdetails/:offerId"
            render={(props) => (
              <OfferDetails offer={
                accomodationOffers.find(({id}) => id === parseInt(props.match.params.offerId, 10))}/>)
            }>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  accomodationCount: PropTypes.number.isRequired,
  accomodationOffers: PropTypes.array.isRequired
};

