import {adaptOfferToApp, adaptReviewToApp} from "../utils/common";
import {
  getOffers,
  getReviews,
} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) => {
  return api.get(`/hotels`)
    .then(({data}) => dispatch(getOffers(data.map(adaptOfferToApp))));
};

export const fetchReviewsList = (offerId) => (dispatch, _getState, api) => {
  return api.get(`/comments/${offerId}`)
    .then(({data}) => dispatch(getReviews(data.map(adaptReviewToApp))));
};
