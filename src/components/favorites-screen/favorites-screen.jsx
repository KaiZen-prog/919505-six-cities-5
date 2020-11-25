import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchFavoriteOffers} from '../../store/api-actions';
import MainHeader from "../main-header/main-header";
import MainFooter from "../main-footer/main-footer";
import FavoritesLoaded from "../favorites-loaded/favotites-loaded";
import FavoritesNotLoaded from "../favorites-not-loaded/favorites-not-loaded";

const FavoritesScreen = (props) => {
  const {favoriteOffers, isFavoriteOffersLoaded, fetchFavoriteOffersAction} = props;

  useEffect(() => {
    fetchFavoriteOffersAction();
  }, []);

  const isZeroOffersToShow = favoriteOffers.length === 0 || isFavoriteOffersLoaded === false;

  return (
    <div className={`page ${(isZeroOffersToShow) ? `page--favorites-empty` : ``}`}>
      <MainHeader/>
      {isZeroOffersToShow
        ? <FavoritesNotLoaded/>
        : <FavoritesLoaded/>
      }
      <MainFooter/>
    </div>
  );
};

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  isFavoriteOffersLoaded: PropTypes.bool.isRequired,
  fetchFavoriteOffersAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteOffersAction: () => dispatch(fetchFavoriteOffers())
});

const mapStateToProps = (state) => ({
  favoriteOffers: state.APP_DATA.favoriteOffers,
  isFavoriteOffersLoaded: state.APP_DATA.isFavoriteOffersLoaded
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
