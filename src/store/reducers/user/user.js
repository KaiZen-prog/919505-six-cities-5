import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../actions";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  data: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload.status,
        data: action.payload.data
      });
  }

  return state;
};

export {user};
