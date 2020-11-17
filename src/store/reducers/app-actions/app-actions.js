import {extend, getCurrentCityOffers, getSortedOffers} from "../../../utils/common";
import {ActionType} from "../../action";
import {Cities, SortingTypes} from "../../../const";

const initialState = {
  offers: [],
  reviews: [],
  currentCity: Cities[0],
  currentCityOffers: [],
  isOffersSortOpened: false,
  currentOffersSort: SortingTypes.POPULAR,
  activeCard: null
};

const appActions = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
        currentCityOffers: getCurrentCityOffers(action.payload, Cities[0])
      });

    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });

    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentCityOffers: getCurrentCityOffers(state.offers, action.payload),
        isOffersSortOpened: false,
        currentOffersSort: SortingTypes.POPULAR
      });

    case ActionType.TOGGLE_OFFERS_SORT_PANEL:
      return extend(state, {
        isOffersSortOpened: !action.payload
      });

    case ActionType.CHANGE_OFFERS_SORT:
      return extend(state, {
        currentOffersSort: action.payload,
        isOffersSortOpened: false,
        currentCityOffers: action.payload === SortingTypes.POPULAR
          ? getCurrentCityOffers(state.offers, state.currentCity)
          : getSortedOffers(state.currentCityOffers, action.payload)
      });

    case ActionType.ACTIVATE_CARD:
      return extend(state, {
        activeCard: action.payload
      });
  }

  return state;
};

export {appActions};
