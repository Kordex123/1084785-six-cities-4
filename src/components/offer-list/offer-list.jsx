import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card.jsx";
// import OfferDetails from "../offer-details/offer-details.jsx";

export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: null,
    };
    this.handlerRoomCardHover = this.handlerRoomCardHover.bind(this);
  }

  handlerRoomCardHover(room) {
    this.setState(() => {
      // eslint-disable-next-line no-console
      console.log(room);
      return {
        activeRoom: room
      };
    });
  }

  render() {
    const {accomodationOffers} = this.props;
    const roomList = accomodationOffers.map((room) =>
      <OfferCard
        key={room.id}
        room={room}
        onRoomHover={this.handlerRoomCardHover}
      />);

    return (
      <div className="cities__places-list places__list tabs__content">
        {roomList}
      </div>
    );
  }
}

OfferList.propTypes = {
  accomodationOffers: PropTypes.array.isRequired
};

