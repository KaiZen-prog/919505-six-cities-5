import {adaptOfferCardToApp, adaptOfferDetailsToApp, adaptReviewToApp, adaptReviewToServer} from "../utils/common";
import {
  getOffers,
  getReviews,
  getOfferDetails,
  requestOfferDetails,
  getNearbyOffers,
  requestNearbyOffers,
  setReviewFormStateAction,
  requireAuthorization,
  redirectToRoute
} from "./action";

import {adaptUserToApp} from "../utils/common";
import {AppRoute, APIRoute, AuthorizationStatus, ReviewFormState} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => {
  return api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(getOffers(data.map(adaptOfferCardToApp))));
};

export const fetchOfferDetails = (offerId) => (dispatch, _state, api) => {
  dispatch(requestOfferDetails());
  return api.get(APIRoute.HOTELS + offerId)
    .then(({data}) => adaptOfferDetailsToApp(data))
    .then((offer) => dispatch(getOfferDetails(offer)));
};

export const fetchNearbyOffers = (offerId) => (dispatch, _state, api) => {
  dispatch(requestNearbyOffers());
  return api.get(APIRoute.HOTELS + offerId + APIRoute.NEARBY)
    .then(({data}) => data.map(adaptOfferCardToApp))
    .then((offers) => dispatch(getNearbyOffers(offers)));
};

export const fetchReviewsList = (offerId) => (dispatch, _getState, api) => {
  return api.get(APIRoute.COMMENTS + offerId)
    .then(({data}) => dispatch(getReviews(data.map(adaptReviewToApp))));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, adaptUserToApp(response.data))))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, adaptUserToApp(response.data))))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const postReview = ({review, rating, offerId}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + offerId, adaptReviewToServer(review, rating))
    .then(({data}) => {
      dispatch(getReviews(data.map(adaptReviewToApp)));
      dispatch(setReviewFormStateAction(ReviewFormState.EDITING));
    })
    .catch(() => dispatch(setReviewFormStateAction(ReviewFormState.SENDING_ERROR)))
);
