import React from "react";
import renderer from "react-test-renderer";
import {OfferDetails} from "./offer-details";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {offers, reviews} from "../../__mocks__/mocks";
import axios from "axios";

const mockStore = configureStore([thunk.withExtraArgument(axios.create({}))]);
const noop = () => {};


describe(`OfferDetails render correctly`, () => {
  it(`OfferDetails with authorized user`, () => {
    const initialState = {
      APP_DATA: {
        offerDetails: offers[0],
        nearbyOffers: offers,
        reviews,
        isReviewRequestPosted: false
      },

      APP_PROCESS: {
        clickedCard: offers[0].id
      },

      USER: {
        authorizationStatus: `AUTH`,
      }
    };
    const store = mockStore(initialState);

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferDetails
                nearbyOffers={offers}
                offerDetails={offers[0]}
                authorizationStatus={`AUTH`}
                changeFavoriteStatusAction={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferDetails with unauthorized user`, () => {
    const initialState = {
      APP_DATA: {
        offerDetails: offers[0],
        nearbyOffers: offers,
        reviews,
        isReviewRequestPosted: false
      },

      APP_PROCESS: {
        clickedCard: offers[0].id
      },

      USER: {
        authorizationStatus: `NO_AUTH`,
      }
    };

    const store = mockStore(initialState);

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferDetails
                nearbyOffers={offers}
                offerDetails={offers[0]}
                authorizationStatus={`NO_AUTH`}
                changeFavoriteStatusAction={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
