import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class CityTabs extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {accomodationOffers} = this.props;
    const cities = accomodationOffers.map((offer, idx) => (
      <li key={`offer-${idx}`}
        className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active" href="#">
          <span>{offer.city.name}</span>
        </a>
      </li>
    ));

    return (
      <ul className="locations__list tabs__list">
        {cities}
      </ul>
    );
  }
}

CityTabs.propTypes = {
  accomodationOffers: PropTypes.array.isRequired
};
