import {appData} from './app-data';
import {ActionType} from "../../action";
import {offers, reviews} from "../../../__mocks__/mocks";
import {formatReviewsArray, removeItem, replaceItem} from "../../../utils/common";

const error = `some error`;

describe(`App-data reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(appData(undefined, {})).toEqual({
      offers: [],
      favoriteOffers: [],
      isFavoriteOffersLoaded: false,
      offerDetails: {},
      isOfferDetailsLoaded: false,
      nearbyOffers: [],
      isNearbyOffersLoaded: false,
      reviews: [],
      isReviewRequestPosted: false,
      postReviewError: null
    });
  });

  it(`Reducer should get offers`, () => {
    expect(appData({offers: []}, {
      type: ActionType.GET_OFFERS,
      payload: offers,
    })).toEqual({
      offers
    });
  });

  it(`Reducer should request offer details`, () => {
    expect(appData({isOfferDetailsLoaded: true}, {
      type: ActionType.OFFER_DETAILS_REQUESTED,
    })).toEqual({
      isOfferDetailsLoaded: false
    });
  });

  it(`Reducer should get offer details`, () => {
    expect(appData({offerDetails: {}, isOfferDetailsLoaded: false}, {
      type: ActionType.GET_OFFER_DETAILS,
      payload: offers[0],
    })).toEqual({
      offerDetails: offers[0],
      isOfferDetailsLoaded: true,
    });
  });

  it(`Reducer should get favorite offers`, () => {
    expect(appData({favoriteOffers: {}, isFavoriteOffersLoaded: false}, {
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: offers
    })).toEqual({
      favoriteOffers: offers,
      isFavoriteOffersLoaded: true,
    });
  });

  it(`Reducer should request favorite offers`, () => {
    expect(appData({isFavoriteOffersLoaded: true}, {
      type: ActionType.FAVORITE_OFFERS_REQUESTED,
    })).toEqual({
      isFavoriteOffersLoaded: false
    });
  });

  it(`Reducer should get reviews`, () => {
    expect(appData({reviews: []}, {
      type: ActionType.GET_REVIEWS,
      payload: reviews
    })).toEqual({
      reviews: formatReviewsArray(reviews)
    });
  });

  it(`Reducer should request post review`, () => {
    expect(appData({isReviewRequestPosted: false}, {
      type: ActionType.POST_REVIEW_REQUESTED,
    })).toEqual({
      isReviewRequestPosted: true,
    });
  });

  it(`Reducer should post review`, () => {
    expect(appData({isReviewRequestPosted: true}, {
      type: ActionType.POST_REVIEW,
    })).toEqual({
      isReviewRequestPosted: false,
    });
  });

  it(`Reducer should write error`, () => {
    expect(appData({postReviewError: ``}, {
      type: ActionType.WRITE_ERROR,
      payload: error,
    })).toEqual({
      postReviewError: error
    });
  });

  it(`Reducer should request nearby offers`, () => {
    expect(appData({isNearbyOffersLoaded: true}, {
      type: ActionType.NEARBY_OFFERS_REQUESTED,
    })).toEqual({
      isNearbyOffersLoaded: false
    });
  });

  it(`Reducer should get nearby offers`, () => {
    expect(appData({nearbyOffers: [], isNearbyOffersLoaded: false}, {
      type: ActionType.GET_NEARBY_OFFERS,
      payload: offers,
    })).toEqual({
      nearbyOffers: offers,
      isNearbyOffersLoaded: true,
    });
  });

  it(`Reducer should remove favorite offer`, () => {
    expect(appData({favoriteOffers: offers}, {
      type: ActionType.REMOVE_FROM_FAVORITE,
      payload: offers[0],
    })).toEqual({
      favoriteOffers: removeItem(offers, offers[0])
    });
  });

  it(`Reducer should change favorite status of the offer`, () => {
    expect(appData({offers}, {
      type: ActionType.CHANGE_OFFERS_FAVORITE_STATUS,
      payload: offers[0],
    })).toEqual({
      offers: replaceItem(offers, offers[0])
    });
  });

  it(`Reducer should change favorite status of the nearby offer`, () => {
    expect(appData({nearbyOffers: offers}, {
      type: ActionType.CHANGE_NEARBY_OFFERS_FAVORITE_STATUS,
      payload: offers[0],
    })).toEqual({
      nearbyOffers: replaceItem(offers, offers[0])
    });
  });

  it(`Reducer should change favorite status in offer details`, () => {
    expect(appData({offerDetails: offers[0]}, {
      type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
      payload: offers[0],
    })).toEqual({
      offerDetails: offers[0]
    });
  });
});
