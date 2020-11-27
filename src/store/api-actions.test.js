import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import * as apiActions from './api-actions';
import {ActionType} from './actions';
import {APIRoute} from "../const";
import {offersFromServer, userInfoFromServer, reviewsFromServer} from "../__mocks__/mocks";
import {adaptOfferToApp, adaptUserToApp, adaptReviewToApp} from "../utils/common";

const adaptedOffers = offersFromServer.map((offer) => adaptOfferToApp(offer));
const adaptedOfferDetails = adaptOfferToApp(offersFromServer[0]);
const adaptedUserInfo = adaptUserToApp(userInfoFromServer);
const adaptedReviews = reviewsFromServer.map((review) => adaptReviewToApp(review));

const api = createAPI(() => {});

const fetchOffers = apiActions.fetchOffersList();
const fetchDetails = apiActions.fetchOfferDetails();
const fetchFavorite = apiActions.fetchFavoriteOffers();
const checkAuth = apiActions.checkAuth();
const postLogin = apiActions.login({email: adaptedUserInfo.email, password: adaptedUserInfo.password});
const fetchNearby = apiActions.fetchNearbyOffers();
const getReviews = apiActions.fetchReviewsList();
const postReview = apiActions.postReview({review: adaptedReviews[0].text, rating: adaptedReviews[0].rating, offerId: adaptedReviews[0].id});
const changeFavoriteStatus = apiActions.changeFavoriteStatus();

new MockAdapter(api)
  .onGet(/hotels/).reply(200, offersFromServer)
  .onGet(`/hotels/1`).reply(200, offersFromServer[0])
  .onGet(`/hotels/1/nearby`).reply(200, offersFromServer)
  .onGet(APIRoute.FAVORITE).reply(200, offersFromServer)
  .onGet(APIRoute.LOGIN).reply(200, userInfoFromServer)
  .onPost(APIRoute.LOGIN).reply(200, userInfoFromServer)
  .onGet(`/comments/1`).reply(200, reviewsFromServer)
  .onPost(`/comments/1`).reply(200, reviewsFromServer[0])
  .onPost(`/favorite/1/1`).reply(200, offersFromServer[0])
  .onPost(`/favorite/1/0`).reply(200, offersFromServer[0]);

describe(`Data Async operations work correctly`, () => {
  it(`Should make a correct API GET /hotels`, () => {
    const dispatch = jest.fn();
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
    const dispatch = jest.fn();
    return fetchDetails(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFER_DETAILS,
          payload: adaptedOfferDetails
        });
      });
  });

  it(`Should make a correct API GET /hotels/id/nearby`, () => {
    const dispatch = jest.fn();
    return fetchNearby(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.NEARBY_OFFERS_REQUESTED
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_NEARBY_OFFERS,
          payload: adaptedOffers
        });
      });
  });

  it(`Should make a correct API GET /favorite`, () => {
    const dispatch = jest.fn();
    return fetchFavorite(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVORITE_OFFERS_REQUESTED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_FAVORITE_OFFERS,
          payload: adaptedOffers
        });
      });
  });

  it(`Should make a correct API GET /login`, () => {
    const dispatch = jest.fn();
    return checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {status: `AUTH`, data: adaptedUserInfo}
        });
      });
  });

  it(`Should make a correct API POST /login`, () => {
    const dispatch = jest.fn();
    return postLogin(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {status: `AUTH`, data: adaptedUserInfo}
        });
      });
  });

  it(`Should make a correct API GET /comments/id`, () => {
    const dispatch = jest.fn();
    return getReviews(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_REVIEWS,
          payload: adaptedReviews
        });
      });
  });

  it(`Should make a correct API POST /comments/id`, () => {
    const dispatch = jest.fn();
    return postReview(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_REVIEW_REQUESTED
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.WRITE_ERROR,
          payload: null
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.GET_REVIEWS,
          payload: adaptedReviews
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.POST_REVIEW
        });
      });
  });

  it(`Should make a correct API POST /favorite/id/*`, () => {
    const dispatch = jest.fn();
    return changeFavoriteStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_OFFERS_FAVORITE_STATUS,
          payload: adaptedOffers[0]
        });
      });
  });
});
