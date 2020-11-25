import {adaptOfferCardToApp, adaptOfferDetailsToApp, adaptReviewToApp, adaptReviewToServer} from "../utils/common";
import {
  getOffers,
  getReviews,
  getFavoriteOffers,
  getOfferDetails,
  requestOfferDetails,
  getNearbyOffers,
  requestNearbyOffers,
  requestFavoriteOffers,
  setReviewFormStateAction,
  requireAuthorization,
  redirectToRoute,
  changeOffersFavoriteStatus,
  removeOfferFromFavorite,
  changeNearbyOffersFavoriteStatus,
  changeOfferFavoriteStatus
} from "./action";

import {adaptUserToApp} from "../utils/common";
import {AppRoute, APIRoute, AuthorizationStatus, ReviewFormState, FavoriteStatus, FavoriteButtonTypes} from "../const";

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

export const fetchFavoriteOffers = () => (dispatch, _state, api) => {
  dispatch(requestFavoriteOffers());
  return api.get(APIRoute.FAVORITE)
    .then(({data}) => data.map(adaptOfferCardToApp))
    .then((offers) => dispatch(getFavoriteOffers(offers)));
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

export const changeFavoriteStatus = (offerId, favoriteButtonType, isInBookmark) => (dispatch, _state, api) => {
  const actionType = isInBookmark ? FavoriteStatus.REMOVE : FavoriteStatus.ADD;
  return api.post(`${APIRoute.FAVORITE}/${offerId}/${actionType}`)
    .then(({data}) => adaptOfferCardToApp(data))
    .then((offer) => dispatch(changeOffersFavoriteStatus(offer)))
    .then((action) => {
      switch (favoriteButtonType) {
        case FavoriteButtonTypes.FAVORITES_SCREEN:
          dispatch(removeOfferFromFavorite(action.payload));
          break;
        case FavoriteButtonTypes.NEARBY_OFFER:
          dispatch(changeNearbyOffersFavoriteStatus(action.payload));
          break;
        case FavoriteButtonTypes.OFFER_SCREEN:
          dispatch(changeOfferFavoriteStatus(action.payload));
          break;
      }
    });
};
