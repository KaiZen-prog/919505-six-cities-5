import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import * as apiActions from './api-actions';
import {ActionType} from './actions';
import {APIRoute, FavoriteStatus} from "../const";
import {offersFromServer, userInfoFromServer, reviewsFromServer} from "../__mocks__/mocks";
import {adaptOfferToApp, adaptUserToApp, adaptReviewToApp} from "../utils/common";

const api = createAPI(() => {});

const offerFromServer = offersFromServer[0];
const adaptedOffers = offersFromServer.map((offer) => adaptOfferToApp(offer));
const adaptedOfferDetails = adaptOfferToApp(offerFromServer);
const adaptedUserInfo = adaptUserToApp(userInfoFromServer);
const adaptedReviews = reviewsFromServer.map((review) => adaptReviewToApp(review));

describe(`Data Async operations work correctly`, () => {
  it(`Should make a correct API GET /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fetchOffers = apiActions.fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, offersFromServer);

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
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchDetails = apiActions.fetchOfferDetails(offerFromServer.id);

    apiMock
      .onGet(`/hotels/1`)
      .reply(200, offerFromServer);

    return fetchDetails(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.OFFER_DETAILS_REQUESTED
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_OFFER_DETAILS,
          payload: adaptedOfferDetails
        });
      });
  });

  it(`Should make a correct API GET /hotels/id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = offerFromServer.id;
    const fetchNearby = apiActions.fetchNearbyOffers(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}${id}${APIRoute.NEARBY}`)
      .reply(200, offersFromServer);

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
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavorite = apiActions.fetchFavoriteOffers();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, offersFromServer);

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
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = apiActions.checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, userInfoFromServer);

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
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postLogin = apiActions.login({email: adaptedUserInfo.email, password: adaptedUserInfo.password});

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, userInfoFromServer);

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
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = offerFromServer.id;
    const getReviews = apiActions.fetchReviewsList(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}${id}`)
      .reply(200, reviewsFromServer);

    return getReviews(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_REVIEWS,
          payload: adaptedReviews
        });
      });
  });

  it(`Should make a correct API POST /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postReview = apiActions.postReview({
      review: adaptedReviews[0].text,
      rating: adaptedReviews[0].rating,
      offerId: adaptedReviews[0].id
    });

    apiMock
      .onPost(`/comments/1`)
      .reply(200, reviewsFromServer);

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
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = offerFromServer.id;
    const isInBookmarks = offerFromServer.is_favorite;
    const actionType = FavoriteStatus.ADD;
    const changeFavoriteStatus = apiActions.changeFavoriteStatus(id, null, isInBookmarks);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/${actionType}`)
      .reply(200, offerFromServer);

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
