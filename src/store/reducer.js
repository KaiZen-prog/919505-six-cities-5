import {extend, getCurrentCityOffers} from "../utils/common";
import {ActionType} from "./action";
import {CITIES} from "../const";
import offers from "../mocks/offers";

const initialState = {
  cities: CITIES,
  currentCity: CITIES[0],
  currentCityOffers: getCurrentCityOffers(offers, CITIES[0])
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentCityOffers: getCurrentCityOffers(offers, action.payload)
      });
  }

  return state;
};

export {reducer};
