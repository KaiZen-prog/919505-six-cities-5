import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import * as apiActions from './api-actions';
import {ActionType} from './actions';
import {APIRoute} from "../const";
import {offersFromServer} from "../__mocks__/mocks";
import {adaptOfferToApp} from "../utils/common";

const adaptedOffers = offersFromServer.map((offer) => adaptOfferToApp(offer));
const offerFromServer = offersFromServer[0];
const adaptedOfferDetails = adaptOfferToApp(offerFromServer);

const api = createAPI(() => {});
const dispatch = jest.fn();

const offerId = adaptedOffers[0].id;

const fetchOffers = apiActions.fetchOffersList();
const fetchDetails = apiActions.fetchOfferDetails();


new MockAdapter(api)
  .onGet(APIRoute.HOTELS).reply(200, offersFromServer)
  .onGet(APIRoute.HOTELS + offerId).reply(200, offersFromServer[0]);

describe(`Data Async operations work correctly`, () => {
  it(`Should make a correct API GET /hotels`, () => {
    return fetchOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFERS,
          payload: adaptedOffers
        });
      });
  });

  it(`Should make a correct API GET /hotels/id`, () => {
    return fetchDetails(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFER_DETAILS,
          payload: adaptedOfferDetails
        });
      });
  });
});
