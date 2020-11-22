import {adaptOfferToApp, adaptReviewToApp} from "../utils/common";
import {getOffers, getReviews, requireAuthorization, redirectToRoute} from "./action";
import {adaptUserToApp} from "../utils/common";
import {AppRoute, APIRoute, AuthorizationStatus} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => {
  return api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(getOffers(data.map(adaptOfferToApp))));
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
