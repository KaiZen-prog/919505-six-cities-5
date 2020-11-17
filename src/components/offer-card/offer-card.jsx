import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {activateCard} from "../../store/action";
import {connect} from "react-redux";
import {AppRoute, RATING_SCALE_MULTIPLIER} from "../../const";

const OfferCard = (props) => {
  const {
    offer, articleClass, imgWrapperClass, onCardActivate
  } = props;

  return (
    <article
      className={articleClass}
      onMouseEnter={() => {
        onCardActivate(offer.id);
      }}
      onFocus={() => {
        onCardActivate(offer.id);
      }}
      onMouseLeave={() => {
        onCardActivate(null);
      }}
      onBlur={() => {
        onCardActivate(null);
      }}
    >
      {offer.isPremium
        ? <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className={imgWrapperClass}>
        <Link to={AppRoute.OFFER + offer.id}>
          <img className="place-card__image" src={offer.poster} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              offer.isInBookmarks
                ? `place-card__bookmark-button place-card__bookmark-button--active button`
                : `place-card__bookmark-button place-card__bookmark-button button`
            }
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.OFFER + offer.id}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    poster: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isInBookmarks: PropTypes.bool.isRequired
  }).isRequired,

  articleClass: PropTypes.string.isRequired,
  imgWrapperClass: PropTypes.string.isRequired,
  onCardActivate: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCardActivate(id) {
    dispatch(activateCard(id));
  }
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
