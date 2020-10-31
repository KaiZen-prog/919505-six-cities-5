export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getCityOffers: (city) => {
    return {
      type: ActionType.GET_CITY_OFFERS,
      payload: city
    };
  }
};
