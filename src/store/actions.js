export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  FAVORITE_OFFERS_REQUESTED: `FAVORITE_OFFERS_REQUESTED`,
  GET_FAVORITE_OFFERS: `GET_FAVORITE_OFFERS`,
  OFFER_DETAILS_REQUESTED: `OFFER_DETAILS_REQUESTED`,
  GET_OFFER_DETAILS: `GET_OFFER_DETAILS`,
  NEARBY_OFFERS_REQUESTED: `NEARBY_OFFERS_REQUESTED`,
  GET_NEARBY_OFFERS: `GET_NEARBY_OFFERS`,
  GET_REVIEWS: `GET_REVIEWS`,
  POST_REVIEW_REQUESTED: `POST_REVIEW_REQUESTED`,
  POST_REVIEW: `POST_REVIEW`,
  WRITE_ERROR: `WRITE_ERROR`,
  CHANGE_CITY: `CHANGE_CITY`,
  TOGGLE_OFFERS_SORT_PANEL: `TOGGLE_OFFERS_SORT_PANEL`,
  CHANGE_OFFERS_SORT: `CHANGE_OFFERS_SORT`,
  ACTIVATE_CARD: `ACTIVATE_CARD`,
  CLICK_CARD: `CLICK_CARD`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  CHANGE_OFFERS_FAVORITE_STATUS: `CHANGE_OFFERS_FAVORITE_STATUS`,
  REMOVE_FROM_FAVORITE: `REMOVE_FROM_FAVORITE`,
  CHANGE_NEARBY_OFFERS_FAVORITE_STATUS: `CHANGE_NEARBY_OFFERS_FAVORITE_STATUS`,
  CHANGE_OFFER_FAVORITE_STATUS: `CHANGE_OFFER_FAVORITE_STATUS`
};

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers
});

export const requestFavoriteOffers = () => ({
  type: ActionType.FAVORITE_OFFERS_REQUESTED
});

export const getFavoriteOffers = (offers) => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: offers
});

export const requestOfferDetails = () => ({
  type: ActionType.OFFER_DETAILS_REQUESTED
});

export const getOfferDetails = (offerDetails) => ({
  type: ActionType.GET_OFFER_DETAILS,
  payload: offerDetails
});

export const requestNearbyOffers = () => ({
  type: ActionType.NEARBY_OFFERS_REQUESTED
});

export const getNearbyOffers = (offers) => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: offers
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews
});

export const postReviewRequested = () => ({
  type: ActionType.POST_REVIEW_REQUESTED
});

export const reviewPost = () => ({
  type: ActionType.POST_REVIEW
});

export const writeError = (error) => ({
  type: ActionType.WRITE_ERROR,
  payload: error
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

export const changeOffersFavoriteStatus = (offer) => ({
  type: ActionType.CHANGE_OFFERS_FAVORITE_STATUS,
  payload: offer
});

export const removeOfferFromFavorite = (offer) => ({
  type: ActionType.REMOVE_FROM_FAVORITE,
  payload: offer
});

export const changeNearbyOffersFavoriteStatus = (offer) => ({
  type: ActionType.CHANGE_NEARBY_OFFERS_FAVORITE_STATUS,
  payload: offer
});

export const changeOfferFavoriteStatus = (offer) => ({
  type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
  payload: offer
});
