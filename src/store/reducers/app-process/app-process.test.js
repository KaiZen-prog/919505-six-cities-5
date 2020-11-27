import {appProcess} from './app-process';
import {ActionType} from "../../action";

const city = `Paris`;
const isOpened = false;
const sort = `Popular`;
const card = 1;

describe(`App-process reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(appProcess(undefined, {})).toEqual({
      currentCity: city,
      isOffersSortOpened: false,
      currentOffersSort: sort,
      activeCard: null,
      clickedCard: null
    });
  });

  it(`Reducer should update currentCity and reset offersSort by change city`, () => {
    expect(appProcess({currentCity: null, isOffersSortOpened: true, currentOffersSort: `POPULAR`}, {
      type: ActionType.CHANGE_CITY,
      payload: city,
    })).toEqual({
      currentCity: city,
      isOffersSortOpened: false,
      currentOffersSort: sort
    });
  });

  it(`Reducer should toggle offersSort`, () => {
    expect(appProcess({isOffersSortOpened: false}, {
      type: ActionType.TOGGLE_OFFERS_SORT_PANEL,
      payload: isOpened,
    })).toEqual({
      isOffersSortOpened: !isOpened
    });
  });

  it(`Reducer should change offersSort`, () => {
    expect(appProcess({isOffersSortOpened: true, currentOffersSort: `LOW_TO_HIGH`}, {
      type: ActionType.CHANGE_OFFERS_SORT,
      payload: sort,
    })).toEqual({
      currentOffersSort: sort,
      isOffersSortOpened: false,
    });
  });

  it(`Reducer should activate the card`, () => {
    expect(appProcess({activeCard: null}, {
      type: ActionType.ACTIVATE_CARD,
      payload: card,
    })).toEqual({
      activeCard: card
    });
  });

  it(`Reducer should remember clicked card id`, () => {
    expect(appProcess({clickedCard: null, activeCard: card}, {
      type: ActionType.CLICK_CARD,
      payload: card,
    })).toEqual({
      clickedCard: card,
      activeCard: null
    });
  });
});
