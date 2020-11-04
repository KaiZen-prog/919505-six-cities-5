import {extend, getCurrentCityOffers, getSortedOffers} from "../utils/common";
import {ActionType} from "./action";
import {Cities, SortingTypes} from "../const";
import offers from "../mocks/offers";

const initialState = {
  currentCity: Cities[0],
  currentCityOffers: getCurrentCityOffers(offers, Cities[0]),
  isOffersSortOpened: false,
  currentOffersSort: SortingTypes.POPULAR,
  activeCard: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentCityOffers: getCurrentCityOffers(offers, action.payload),
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
          ? getCurrentCityOffers(offers, state.currentCity)
          : getSortedOffers(state.currentCityOffers, action.payload)
      });

    case ActionType.ACTIVATE_CARD:
      return extend(state, {
        activeCard: action.payload
      });
  }

  return state;
};

export {reducer};
