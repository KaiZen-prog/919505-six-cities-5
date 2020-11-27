import {user} from './user';
import {ActionType} from "../../action";

const authorizationStatus = `NO_AUTH`;
const data = null;


describe(`User reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(user(undefined, {})).toEqual({
      authorizationStatus,
      data
    });
  });

  it(`Reducer should update user info`, () => {
    expect(user({authorizationStatus, data}, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status,
        data
      }
    })).toEqual({
      authorizationStatus: status,
      data
    });
  });
});
