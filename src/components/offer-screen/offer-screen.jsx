import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {OfferCardArticleClasses, OfferCardImgWrapperClasses, RATING_SCALE_MULTIPLIER} from "../../const";
import CommentForm from "../comment-form/comment-form";
import Reviews from "../reviews/reviews";
import OfferList from "../offer-list/offer-list";

class OfferScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, offer} = this.props;

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.map((photo, i) => (
                  <div key={i} className="property__image-wrapper">
                    <img className="property__image" src={`img/${photo}`} alt="Photo studio"/>
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
                  <button className="property__bookmark-button button" type="button">
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
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={`img/${offer.owner.avatar}`} width="74" height="74" alt="Host avatar"/>
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.reviews.length}</span></h2>
                  <Reviews reviews={offer.reviews}/>
                  <CommentForm/>
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferList
                  offers={offers}
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
      name: PropTypes.string.isRequired
    }).isRequired,
    reviews: PropTypes.array.isRequired,
    isInBookmarks: PropTypes.bool.isRequired
  }).isRequired,
};

export default OfferScreen;
