import React from "react";
import PropTypes from "prop-types";
import {AccomodationType} from "../../accomodation-type";
import {Link} from "react-router-dom";

const OfferCard = (props) => {
  const {room, onRoomHover} = props;
  const {id, title, previewImage, price, rating, type} = room;
  const ratingValue = Math.round(rating) * 20;
  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => onRoomHover(room)}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{"width": `${ratingValue}%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/dev-offerdetails/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.oneOf([AccomodationType.APARTMENT, AccomodationType.HOTEL, AccomodationType.HOUSE, AccomodationType.ROOM]).isRequired,
  }).isRequired,
  onRoomHover: PropTypes.func.isRequired,
};

export default OfferCard;
