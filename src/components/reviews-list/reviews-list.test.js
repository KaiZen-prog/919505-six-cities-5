import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {offers, reviews} from "../../__mocks__/mocks";

const mockStore = configureStore();

const initialState = {
  APP_DATA: {
    reviews
  }
};

const store = mockStore(initialState);
const noop = () => {};

test(`ReviewsList without error`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <ReviewsList
              offerId={offers[0].id}
              reviews={reviews}
              getReviewsAction={noop}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

