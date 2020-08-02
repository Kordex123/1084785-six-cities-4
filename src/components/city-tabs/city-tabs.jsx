import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class CityTabs extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {cityNames} = this.props;
    const cities = cityNames.map((cityName, idx) => (
      <li key={`offer-${idx}`}
        className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active" href="#">
          <span>{cityName}</span>
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
  cityNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
