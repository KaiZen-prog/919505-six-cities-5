import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {OfferCardArticleClasses, OfferCardImgWrapperClasses, FavoriteButtonTypes} from "../../const";
import MainHeader from "../main-header/main-header";
import OfferDetails from "../offer-details/offer-details";
import {fetchOfferDetails, fetchNearbyOffers} from "../../store/api-actions";
import OfferList from "../offer-list/offer-list";

const OfferScreen = (props) => {
  const {fetchOffer, fetchNearby, currentOfferId, nearbyOffers, isOfferDetailsLoaded, isNearbyOffersLoaded} = props;

  useEffect(() => {
    fetchOffer(currentOfferId);
    fetchNearby(currentOfferId);
  }, [currentOfferId]);

  return (
    <div className="page">
      <MainHeader/>
      <main className="page__main page__main--property">
        {isOfferDetailsLoaded && isNearbyOffersLoaded
          ? <OfferDetails/>
          : ``}

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {isNearbyOffersLoaded
                ? <OfferList
                  offers={nearbyOffers}
                  offerCardArticleClass = {OfferCardArticleClasses.OFFER_SCREEN}
                  offerCardImgWrapperClass = {OfferCardImgWrapperClasses.OFFER_SCREEN}
                  favoriteButtonType={FavoriteButtonTypes.OFFER_SCREEN}
                />
                : ``}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  fetchOffer: PropTypes.func.isRequired,
  fetchNearby: PropTypes.func.isRequired,
  currentOfferId: PropTypes.number.isRequired,
  nearbyOffers: PropTypes.array.isRequired,

  isOfferDetailsLoaded: PropTypes.bool.isRequired,
  isNearbyOffersLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    nearbyOffers: state.APP_DATA.nearbyOffers,
    currentOfferId: state.APP_PROCESS.clickedCard,
    offerDetails: state.APP_DATA.offerDetails,
    isOfferDetailsLoaded: state.APP_DATA.isOfferDetailsLoaded,
    isNearbyOffersLoaded: state.APP_DATA.isNearbyOffersLoaded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchOffer: (offerId) => dispatch(fetchOfferDetails(offerId)),
  fetchNearby: (offerId) => dispatch(fetchNearbyOffers(offerId)),
});

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
