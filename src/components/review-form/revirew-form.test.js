import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {offers} from "../../__mocks__/mocks";

const mockStore = configureStore();

const initialState = {
  APP_DATA: {
    postReviewError: null,
    isReviewRequestPosted: false
  },

  APP_PROCESS: {
    clickedCard: offers[0].id
  }
};

const store = mockStore(initialState);
const noop = () => {};

describe(`ReviewForm render correctly`, () => {
  it(`ReviewForm without error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <ReviewForm
                offerId={offers[0].id}
                sendReviewAction={noop}
                sendReviewError={null}
                reviewRequestStatus={false}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm with error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <ReviewForm
                offerId={offers[0].id}
                sendReviewAction={noop}
                sendReviewError={`some error`}
                reviewRequestStatus={false}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

