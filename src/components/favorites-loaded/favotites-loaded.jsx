import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FavoritesItem from '../favorites-item/favorites-item';

const FavoritesLoaded = (props) => {
  const {favoriteOffers} = props;

  const getCities = (offers) => {
    const uniqCities = new Set(offers.map((offer) => offer.city));
    return Array.from(uniqCities);
  };

  const cities = getCities(favoriteOffers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city) => (
              <FavoritesItem
                key={city}
                city={city}
                offers={favoriteOffers}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesLoaded.propTypes = {
  favoriteOffers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.APP_DATA.favoriteOffers,
});

export {FavoritesLoaded};
export default connect(mapStateToProps)(FavoritesLoaded);
