import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card.jsx";

export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: null
    };
    this.handlerRoomTitleClick = this.handlerRoomTitleClick.bind(this);
    this.handlerRoomCardHover = this.handlerRoomCardHover.bind(this);
  }

  handlerRoomTitleClick(room) {
    this.setState(() => {
      // eslint-disable-next-line no-console
      console.log(room);
      return {
        activeRoom: room
      };
    });
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
    const {activeRoom} = this.state;
    const roomList = accomodationOffers.map((room) =>
      <OfferCard
        key={room.id}
        room={room}
        onRoomTitleClick={this.handlerRoomTitleClick}
        onRoomHover={this.handlerRoomCardHover}
      />);

    return (
      <div className="cities__places-list places__list tabs__content">
        <div>{activeRoom && activeRoom.title }</div>
        {roomList}
      </div>
    );
  }
}

OfferList.propTypes = {
  accomodationOffers: PropTypes.array.isRequired
};

