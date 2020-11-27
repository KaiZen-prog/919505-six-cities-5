import React from "react";
import renderer from "react-test-renderer";
import {OfferScreen} from "./offer-screen";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {offers, reviews} from "../../__mocks__/mocks";

const mockStore = configureStore();

const initialState = {
  APP_DATA: {
    nearbyOffers: offers,
    offerDetails: offers[0],
    reviews
  },

  APP_PROCESS: {
    clickedCard: offers[0].id
  },

  USER: {
    authorizationStatus: `NO_AUTH`
  }
};

const store = mockStore(initialState);
const noop = () => {};

test(`OfferScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <OfferScreen
              fetchOffer={noop}
              fetchNearby={noop}
              currentOfferId={offers[0].id}
              nearbyOffers={offers}
              isOfferDetailsLoaded={true}
              isNearbyOffersLoaded={true}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

