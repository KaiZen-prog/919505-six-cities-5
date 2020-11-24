import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
  CityMapClasses,
  RATING_SCALE_MULTIPLIER,
  AuthorizationStatus
} from "../../const";

import CommentForm from "../comment-form/comment-form";
import ReviewsList from "../reviews-list/reviews-list";
import CityMap from "../city-map/city-map";

const OfferDetails = (props) => {
  const {offerDetails, nearbyOffers, authorizationStatus} = props;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {offerDetails.photos.map((photo, i) => (
            <div key={i} className="property__image-wrapper">
              <img className="property__image" src={photo} alt="Photo studio"/>
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {offerDetails.isPremium
            ? <div className="property__mark">
              <span>Premium</span>
            </div>
            : ``
          }
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {offerDetails.title}
            </h1>
            <button
              className={
                offerDetails.isInBookmarks
                  ? `property__bookmark-button property__bookmark-button--active button`
                  : `property__bookmark-button button`
              }
            >
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{
                offerDetails.isInBookmarks
                  ? `In bookmarks`
                  : `To bookmarks`
              }</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${Math.round(offerDetails.rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{offerDetails.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {offerDetails.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {offerDetails.bedroomsQuantity === 1
                ? offerDetails.bedroomsQuantity + ` Bedroom`
                : offerDetails.bedroomsQuantity + ` Bedrooms`
              }
            </li>
            <li className="property__feature property__feature--adults">
              {offerDetails.maxAdults === 1
                ? `Max ` + offerDetails.maxAdults + ` adult`
                : `Max ` + offerDetails.maxAdults + ` adults`
              }
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{offerDetails.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {offerDetails.features.map((feature, i) => (
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
                className={offerDetails.owner.isPro
                  ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                  : `property__avatar-wrapper user__avatar-wrapper`
                }
              >
                <img className="property__avatar user__avatar" src={offerDetails.owner.avatar} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {offerDetails.owner.name}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {offerDetails.description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <ReviewsList/>

            {authorizationStatus === AuthorizationStatus.AUTH
              ? <CommentForm/>
              : ``}
          </section>
        </div>
      </div>
      <CityMap
        offers={nearbyOffers}
        cityMapClass = {CityMapClasses.OFFER_SCREEN}
        clickedOfferCoords={offerDetails.coords}
      />
    </section>
  );
};

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
  ),

  offerDetails: PropTypes.shape().isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    offerDetails: state.APP_DATA.offerDetails,
    nearbyOffers: state.APP_DATA.nearbyOffers,
    authorizationStatus: state.USER.authorizationStatus
  };
};

export {OfferDetails};
export default connect(mapStateToProps)(OfferDetails);
