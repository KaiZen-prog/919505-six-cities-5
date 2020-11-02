export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  TOGGLE_OFFERS_SORT_PANEL: `TOGGLE_OFFERS_SORT_PANEL`,
  CHANGE_OFFERS_SORT: `CHANGE_OFFERS_SORT`,
  GET_ACTIVE_CARD: `GET_ACTIVE_CARD`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  toggleOffersSortPanel: (isOpened) => ({
    type: ActionType.TOGGLE_OFFERS_SORT_PANEL,
    payload: isOpened
  }),

  changeOffersSort: (sort) => ({
    type: ActionType.CHANGE_OFFERS_SORT,
    payload: sort
  }),

  getActiveCard: (card) => ({
    type: ActionType.GET_ACTIVE_CARD,
    payload: card
  })
};
