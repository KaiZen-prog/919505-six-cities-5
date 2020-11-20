import {extend} from "../../../utils/common";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  reviews: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {appData};
