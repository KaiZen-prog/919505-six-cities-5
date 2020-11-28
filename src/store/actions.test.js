import * as actions from './actions';
import {offers, reviews} from '../__mocks__/mocks';

const ActionType = actions.ActionType;
const error = `some error`;
const city = `Paris`;
const isOpened = false;
const sort = `POPULAR`;
const card = 1;
const status = `NO_AUTH`;
const data = {};

describe(`Actions work correctly`, () => {
  it(`Action getOffers work correctly`, () => {
    expect(actions.getOffers(offers)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: offers
    });
  });

  it(`Action requestFavoriteOffers work correctly`, () => {
    expect(actions.requestFavoriteOffers(offers)).toEqual({
      type: ActionType.FAVORITE_OFFERS_REQUESTED
    });
  });

  it(`Action getFavoriteOffers work correctly`, () => {
    expect(actions.getFavoriteOffers(offers)).toEqual({
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: offers
    });
  });

  it(`Action requestOfferDetails work correctly`, () => {
    expect(actions.requestOfferDetails(offers)).toEqual({
      type: ActionType.OFFER_DETAILS_REQUESTED
    });
  });

  it(`Action getOfferDetails work correctly`, () => {
    expect(actions.getOfferDetails(offers[0])).toEqual({
      type: ActionType.GET_OFFER_DETAILS,
      payload: offers[0]
    });
  });

  it(`Action requestNearbyOffers work correctly`, () => {
    expect(actions.requestNearbyOffers()).toEqual({
      type: ActionType.NEARBY_OFFERS_REQUESTED,
    });
  });

  it(`Action getNearbyOffers work correctly`, () => {
    expect(actions.getNearbyOffers(offers)).toEqual({
      type: ActionType.GET_NEARBY_OFFERS,
      payload: offers
    });
  });

  it(`Action getReviews work correctly`, () => {
    expect(actions.getReviews(reviews)).toEqual({
      type: ActionType.GET_REVIEWS,
      payload: reviews
    });
  });

  it(`Action postReviewRequested work correctly`, () => {
    expect(actions.postReviewRequested()).toEqual({
      type: ActionType.POST_REVIEW_REQUESTED,
    });
  });

  it(`Action reviewPost work correctly`, () => {
    expect(actions.reviewPost()).toEqual({
      type: ActionType.POST_REVIEW,
    });
  });

  it(`Action writeError work correctly`, () => {
    expect(actions.writeError(error)).toEqual({
      type: ActionType.WRITE_ERROR,
      payload: error
    });
  });

  it(`Action changeCity work correctly`, () => {
    expect(actions.changeCity(city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: city
    });
  });

  it(`Action toggleOffersSortPanel work correctly`, () => {
    expect(actions.toggleOffersSortPanel(isOpened)).toEqual({
      type: ActionType.TOGGLE_OFFERS_SORT_PANEL,
      payload: isOpened
    });
  });

  it(`Action changeOffersSort work correctly`, () => {
    expect(actions.changeOffersSort(sort)).toEqual({
      type: ActionType.CHANGE_OFFERS_SORT,
      payload: sort
    });
  });

  it(`Action activateCard work correctly`, () => {
    expect(actions.activateCard(card)).toEqual({
      type: ActionType.ACTIVATE_CARD,
      payload: card
    });
  });

  it(`Action clickCard work correctly`, () => {
    expect(actions.clickCard(card)).toEqual({
      type: ActionType.CLICK_CARD,
      payload: card
    });
  });

  it(`Action requireAuthorization work correctly`, () => {
    expect(actions.requireAuthorization(status, data)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status,
        data
      }
    });
  });

  it(`Action changeOffersFavoriteStatus work correctly`, () => {
    expect(actions.changeOffersFavoriteStatus(offers[0])).toEqual({
      type: ActionType.CHANGE_OFFERS_FAVORITE_STATUS,
      payload: offers[0]
    });
  });

  it(`Action removeOfferFromFavorite work correctly`, () => {
    expect(actions.removeOfferFromFavorite(offers[0])).toEqual({
      type: ActionType.REMOVE_FROM_FAVORITE,
      payload: offers[0]
    });
  });

  it(`Action changeNearbyOffersFavoriteStatus work correctly`, () => {
    expect(actions.changeNearbyOffersFavoriteStatus(offers[0])).toEqual({
      type: ActionType.CHANGE_NEARBY_OFFERS_FAVORITE_STATUS,
      payload: offers[0]
    });
  });

  it(`Action changeOfferFavoriteStatus work correctly`, () => {
    expect(actions.changeOfferFavoriteStatus(offers[0])).toEqual({
      type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
      payload: offers[0]
    });
  });
});
