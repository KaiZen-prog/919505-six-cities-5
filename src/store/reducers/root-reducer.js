import {combineReducers} from "redux";
import {appActions} from "./app-actions/app-actions";
import {user} from "./user/user";

export const NameSpace = {
  APP_ACTIONS: `APP_ACTIONS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.APP_ACTIONS]: appActions,
  [NameSpace.USER]: user
});
