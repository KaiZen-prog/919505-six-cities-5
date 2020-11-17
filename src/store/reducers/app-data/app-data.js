import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import offers from "../../../mocks/offers";

const initialState = {
  offers
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {appData};
