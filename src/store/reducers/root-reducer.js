import {combineReducers} from "redux";
import {appData} from "./app-data/app-data";
import {appProcess} from "./app-process/app-process";
import {user} from "./user/user";

export const NameSpace = {
  APP_DATA: `APP_DATA`,
  APP_PROCESS: `APP_PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.APP_DATA]: appData,
  [NameSpace.APP_PROCESS]: appProcess,
  [NameSpace.USER]: user
});
