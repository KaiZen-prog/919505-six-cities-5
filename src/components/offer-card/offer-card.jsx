import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import browserHistory from "../../browser-history";
import {activateCard, clickCard} from "../../store/action";
import {connect} from "react-redux";
import {AppRoute, RATING_SCALE_MULTIPLIER, AuthorizationStatus} from "../../const";
import {changeFavoriteStatus} from "../../store/api-actions";

const OfferCard = (props) => {
  const {
    offer,
    authorizationStatus,
    articleClass,
    imgWrapperClass,
    onCardActivate,
    onCardClick,
    changeFavoriteStatusAction,
    favoriteButtonType
  } = props;

  const handleFavoriteButtonClick = (evt) => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(AppRoute.LOGIN);
      return;
    }

    changeFavoriteStatusAction(offer.id, favoriteButtonType, offer.isInBookmarks);
  };

  const handleCardEnter = () => {
    onCardActivate(offer.id);
  };

  const handleCardLeave = () => {
    onCardActivate(null);
  };

  return (
    <article className={articleClass} onMouseEnter={handleCardEnter} onMouseLeave={handleCardLeave}>
      {offer.isPremium
        ? <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className={imgWrapperClass}>
        <Link
          id="card-image-link"
          onClick={() => {
            onCardClick(offer.id);
          }}
          to={AppRoute.OFFER + offer.id}>
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
            onClick={handleFavoriteButtonClick}
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
          <Link
            id="card-name-link"
            onClick={() => {
              onCardClick(offer.id);
            }}
            to={AppRoute.OFFER + offer.id}>
            {offer.title}</Link>
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
  authorizationStatus: PropTypes.string.isRequired,
  articleClass: PropTypes.string.isRequired,
  imgWrapperClass: PropTypes.string.isRequired,
  onCardActivate: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  favoriteButtonType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.USER.authorizationStatus
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardActivate(id) {
    dispatch(activateCard(id));
  },

  onCardClick(id) {
    dispatch(clickCard(id));
  },

  changeFavoriteStatusAction: (id, favoriteButtonType, isInBookmark) => (
    dispatch(changeFavoriteStatus(id, favoriteButtonType, isInBookmark)
    )),
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
