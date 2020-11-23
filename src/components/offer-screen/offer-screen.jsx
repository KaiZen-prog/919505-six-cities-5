import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
  CityMapClasses,
  OfferCardArticleClasses,
  OfferCardImgWrapperClasses,
  RATING_SCALE_MULTIPLIER,
  AuthorizationStatus
} from "../../const";

import MainHeader from "../main-header/main-header";
import CommentForm from "../comment-form/comment-form";
import ReviewsList from "../reviews-list/reviews-list";
import OfferList from "../offer-list/offer-list";
import CityMap from "../city-map/city-map";
import {selectCurrentCityOffers} from "../../store/selectors/offers/select-city-offers";

class OfferScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.offers === nextProps.offers;
  }

  render() {
    const {offers, offer, authorizationStatus} = this.props;
    const otherOffers = offers.filter((entity) => (
      entity.id !== offer.id
    ));

    return (
      <div className="page">
        <MainHeader/>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.map((photo, i) => (
                  <div key={i} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium
                  ? <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  : ``
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button
                    className={
                      offer.isInBookmarks
                        ? `property__bookmark-button property__bookmark-button--active button`
                        : `property__bookmark-button button`
                    }
                  >
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{
                      offer.isInBookmarks
                        ? `In bookmarks`
                        : `To bookmarks`
                    }</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${Math.round(offer.rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedroomsQuantity === 1
                      ? offer.bedroomsQuantity + ` Bedroom`
                      : offer.bedroomsQuantity + ` Bedrooms`
                    }
                  </li>
                  <li className="property__feature property__feature--adults">
                    {offer.maxAdults === 1
                      ? `Max ` + offer.maxAdults + ` adult`
                      : `Max ` + offer.maxAdults + ` adults`
                    }
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.features.map((feature, i) => (
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
                      className={offer.owner.isPro
                        ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                        : `property__avatar-wrapper user__avatar-wrapper`
                      }
                    >
                      <img className="property__avatar user__avatar" src={offer.owner.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {offer.owner.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList offerId={offer.id} />

                  {authorizationStatus === AuthorizationStatus.AUTH
                    ? <CommentForm/>
                    : ``}
                </section>
              </div>
            </div>
            <CityMap
              offers={otherOffers}
              cityMapClass = {CityMapClasses.OFFER_SCREEN}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferList
                  offers={otherOffers}
                  offerCardArticleClass = {OfferCardArticleClasses.OFFER_SCREEN}
                  offerCardImgWrapperClass = {OfferCardImgWrapperClasses.OFFER_SCREEN}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferScreen.propTypes = {
  offers: PropTypes.array.isRequired,

  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    isPremium: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedroomsQuantity: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }).isRequired,
    isInBookmarks: PropTypes.bool.isRequired
  }).isRequired,

  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const data = {state};
  return {
    offers: selectCurrentCityOffers(data),
    offer: state.APP_DATA.offers.find((offer) => offer.id === state.APP_PROCESS.clickedCard),
    authorizationStatus: state.USER.authorizationStatus
  };
};

export {OfferScreen};
export default connect(mapStateToProps)(OfferScreen);
