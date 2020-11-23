export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_REVIEWS: `GET_REVIEWS`,
  POST_REVIEW: `POST_REVIEW`,
  CHANGE_CITY: `CHANGE_CITY`,
  TOGGLE_OFFERS_SORT_PANEL: `TOGGLE_OFFERS_SORT_PANEL`,
  CHANGE_OFFERS_SORT: `CHANGE_OFFERS_SORT`,
  ACTIVATE_CARD: `ACTIVATE_CARD`,
  CLICK_CARD: `CLICK_CARD`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_STATE_REVIEW_FORM: `SET_STATE_REVIEW_FORM`
};

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews
});

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const toggleOffersSortPanel = (isOpened) => ({
  type: ActionType.TOGGLE_OFFERS_SORT_PANEL,
  payload: isOpened
});

export const changeOffersSort = (sort) => ({
  type: ActionType.CHANGE_OFFERS_SORT,
  payload: sort
});

export const activateCard = (card) => ({
  type: ActionType.ACTIVATE_CARD,
  payload: card
});

export const clickCard = (card) => ({
  type: ActionType.CLICK_CARD,
  payload: card
});

export const requireAuthorization = (status, data) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: {
    status,
    data
  }
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setReviewFormStateAction = (data) => ({
  type: ActionType.SET_STATE_REVIEW_FORM,
  payload: data
});
