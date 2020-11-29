import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import browserHistory from "../../browser-history";

import {
  CityMapClasses,
  RATING_SCALE_MULTIPLIER,
  AuthorizationStatus,
  AppRoute,
  FavoriteButtonTypes
} from "../../const";

import ReviewForm from "../review-form/review-form";
import withReviewCommentForm from "../../hocs/with-review-form";
import ReviewsList from "../reviews-list/reviews-list";
import CityMap from "../city-map/city-map";
import {changeFavoriteStatus} from "../../store/api-actions";

const ReviewFormWrapped = withReviewCommentForm(ReviewForm);

const OfferDetails = (props) => {
  const {offerDetails, nearbyOffers, authorizationStatus, changeFavoriteStatusAction} = props;

  const {
    photos,
    isPremium,
    id,
    isInBookmarks,
    title,
    rating,
    type,
    bedroomsQuantity,
    maxAdults,
    price,
    features,
    description,
    coords,
    owner
  } = offerDetails;

  const handleFavoriteButtonClick = (evt) => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(AppRoute.LOGIN);
      return;
    }

    changeFavoriteStatusAction(id, FavoriteButtonTypes.MAIN_SCREEN, offerDetails.isInBookmarks);
  };

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {photos.map((photo, i) => (
            <div key={i} className="property__image-wrapper">
              <img className="property__image" src={photo} alt="Photo studio"/>
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium
            ? <div className="property__mark">
              <span>Premium</span>
            </div>
            : ``
          }
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button
              onClick={handleFavoriteButtonClick}
              className={
                isInBookmarks
                  ? `property__bookmark-button property__bookmark-button--active button`
                  : `property__bookmark-button button`
              }
            >
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{
                isInBookmarks
                  ? `In bookmarks`
                  : `To bookmarks`
              }</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${Math.round(rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedroomsQuantity === 1
                ? bedroomsQuantity + ` Bedroom`
                : bedroomsQuantity + ` Bedrooms`
              }
            </li>
            <li className="property__feature property__feature--adults">
              {maxAdults === 1
                ? `Max ` + maxAdults + ` adult`
                : `Max ` + maxAdults + ` adults`
              }
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {features.map((feature, i) => (
                <li key={i} className="property__inside-item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div
                className={owner.isPro
                  ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                  : `property__avatar-wrapper user__avatar-wrapper`
                }
              >
                <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {owner.name}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <ReviewsList/>

            {authorizationStatus === AuthorizationStatus.AUTH
              ? <ReviewFormWrapped offerId={offerDetails.id}/>
              : ``}
          </section>
        </div>
      </div>
      <CityMap
        offers={nearbyOffers}
        cityMapClass = {CityMapClasses.OFFER_SCREEN}
        clickedOfferCoords={coords}
      />
    </section>
  );
};

OfferDetails.defaultProps = {offerDetails: {photos: []}};

OfferDetails.propTypes = {
  nearbyOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isInBookmarks: PropTypes.bool.isRequired
      })
  ).isRequired,

  offerDetails: PropTypes.shape({
    photos: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    isPremium: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    isInBookmarks: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedroomsQuantity: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    coords: PropTypes.array.isRequired,
    owner: PropTypes.shape({
      isPro: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    offerDetails: state.APP_DATA.offerDetails,
    nearbyOffers: state.APP_DATA.nearbyOffers,
    authorizationStatus: state.USER.authorizationStatus
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatusAction: (id, favoriteButtonType, isInBookmark) => (
    dispatch(changeFavoriteStatus(id, favoriteButtonType, isInBookmark)
    )),
});

export {OfferDetails};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
