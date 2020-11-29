import {extend, formatReviewsArray, removeItem, replaceItem} from "../../../utils/common";
import {ActionType} from "../../actions";

const initialState = {
  offers: [],
  favoriteOffers: [],
  isFavoriteOffersLoaded: false,
  offerDetails: {},
  isOfferDetailsLoaded: false,
  nearbyOffers: [],
  isNearbyOffersLoaded: false,
  reviews: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.OFFER_DETAILS_REQUESTED:
      return extend(state, {
        isOfferDetailsLoaded: false,
      });

    case ActionType.GET_OFFER_DETAILS:
      return extend(state, {
        offerDetails: action.payload,
        isOfferDetailsLoaded: true,
      });

    case ActionType.GET_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload,
        isFavoriteOffersLoaded: true,
      });

    case ActionType.FAVORITE_OFFERS_REQUESTED:
      return extend(state, {
        isFavoriteOffersLoaded: false,
      });

    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: formatReviewsArray(action.payload)
      });

    case ActionType.NEARBY_OFFERS_REQUESTED:
      return extend(state, {
        isNearbyOffersLoaded: false,
      });

    case ActionType.GET_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload,
        isNearbyOffersLoaded: true,
      });

    case ActionType.REMOVE_FROM_FAVORITE:
      return extend(state, {
        favoriteOffers: removeItem(state.favoriteOffers, action.payload)
      });

    case ActionType.CHANGE_OFFERS_FAVORITE_STATUS:
      return extend(state, {
        offers: replaceItem(state.offers, action.payload)
      });

    case ActionType.CHANGE_NEARBY_OFFERS_FAVORITE_STATUS:
      return extend(state, {
        nearbyOffers: replaceItem(state.nearbyOffers, action.payload)
      });

    case ActionType.CHANGE_OFFER_FAVORITE_STATUS:
      return extend(state, {
        offerDetails: action.payload
      });
  }

  return state;
};

export {appData};
