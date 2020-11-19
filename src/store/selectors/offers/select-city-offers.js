import {createSelector} from "reselect";
import {SortingTypes} from "../../../const";

const selectAllState = (data) => data;

export const selectCurrentCityOffers = createSelector(
    selectAllState,
    ({state}) => {
      let currentCity = state.APP_PROCESS.currentCity;

      switch (state.APP_PROCESS.currentOffersSort) {
        case SortingTypes.LOW_TO_HIGH:
          return state.APP_DATA.offers.filter(
              (offer) => (offer.city === currentCity)
          ).sort(
              function (a, b) {
                return a.price - b.price;
              }
          );
        case SortingTypes.HIGH_TO_LOW:
          return state.APP_DATA.offers.filter(
              (offer) => (offer.city === currentCity)
          ).sort(
              function (a, b) {
                return b.price - a.price;
              }
          );

        case SortingTypes.TOP_RATED_FIRST:
          return state.APP_DATA.offers.filter(
              (offer) => (offer.city === currentCity)
          ).sort(
              function (a, b) {
                return b.rating - a.rating;
              }
          );
        default:
          return state.APP_DATA.offers.filter(
              (offer) => (offer.city === currentCity)
          );
      }
    });
