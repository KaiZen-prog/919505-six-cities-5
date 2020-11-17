export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_REVIEWS: `GET_REVIEWS`,
  CHANGE_CITY: `CHANGE_CITY`,
  TOGGLE_OFFERS_SORT_PANEL: `TOGGLE_OFFERS_SORT_PANEL`,
  CHANGE_OFFERS_SORT: `CHANGE_OFFERS_SORT`,
  ACTIVATE_CARD: `ACTIVATE_CARD`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews,
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

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
