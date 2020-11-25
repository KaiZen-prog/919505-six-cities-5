import {extend, sortReviewsByDate} from "../../../utils/common";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
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

    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: sortReviewsByDate(action.payload)
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
  }

  return state;
};

export {appData};
