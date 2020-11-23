import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {Cities, SortingTypes, ReviewFormState} from "../../../const";

const initialState = {
  currentCity: Cities[0],
  isOffersSortOpened: false,
  currentOffersSort: SortingTypes.POPULAR,
  activeCard: null,
  clickedCard: null,
  reviewFormState: ReviewFormState.EDITING
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
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
      });

    case ActionType.ACTIVATE_CARD:
      return extend(state, {
        activeCard: action.payload
      });

    case ActionType.CLICK_CARD:
      return extend(state, {
        clickedCard: action.payload,
        activeCard: null
      });

    case ActionType.SET_STATE_REVIEW_FORM:
      return extend(state, {
        reviewFormState: action.payload
      });
  }

  return state;
};

export {appProcess};
