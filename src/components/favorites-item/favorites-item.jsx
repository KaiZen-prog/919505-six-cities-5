import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import OfferCard from "../offer-card/offer-card";
import {AppRoute, OfferCardArticleClasses, OfferCardImgWrapperClasses, FavoriteButtonTypes} from "../../const";

const FavoritesItem = ({city, offers}) => {
  const favoritesOffersByCities = offers.filter((offer) => offer.city === city);

  return (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.ROOT}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffersByCities.map((offer) => (
          <OfferCard
            offer={offer}
            articleClass={OfferCardArticleClasses.FAVORITES_SCREEN}
            imgWrapperClass={OfferCardImgWrapperClasses.FAVORITES_SCREEN}
            favoriteButtonType={FavoriteButtonTypes.FAVORITES_SCREEN}
            key={offer.id}/>
        ))}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired
};

export default FavoritesItem;
