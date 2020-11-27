import React from "react";
import renderer from "react-test-renderer";
import {OffersSort} from "./offers-sort";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {SortingTypes} from "../../const";

const mockStore = configureStore();
const noop = () => {};

describe(`OffersSort render correctly`, () => {
  it(`OffersSort closed`, () => {
    const initialState = {
      APP_PROCESS: {
        isOffersSortOpened: true,
        currentOffersSort: SortingTypes.POPULAR
      }
    };

    const store = mockStore(initialState);

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OffersSort
                isOffersSortOpened={false}
                currentOffersSort={SortingTypes.POPULAR}
                togglePanel={noop}
                onOffersSortChange={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OffersSort opened`, () => {
    const initialState = {
      APP_PROCESS: {
        isOffersSortOpened: true,
        currentOffersSort: SortingTypes.POPULAR
      }
    };

    const store = mockStore(initialState);

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OffersSort
                isOffersSortOpened={true}
                currentOffersSort={SortingTypes.POPULAR}
                togglePanel={noop}
                onOffersSortChange={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

