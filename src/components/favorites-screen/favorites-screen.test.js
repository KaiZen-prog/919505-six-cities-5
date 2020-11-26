import React from "react";
import renderer from "react-test-renderer";
import {FavoritesScreen} from "./favorites-screen";
import {offers} from "../../__mocks__/mocks";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {InitialState} from "../../__mocks__/mocks";

const mockStore = configureStore();

describe(`FavoritesScreen render correctly`, () => {
  const store = mockStore(InitialState);

  it(`FavoritesScreen with loaded offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history ={browserHistory}>
              <FavoritesScreen
                favoriteOffers={offers}
                isFavoriteOffersLoaded={false}
                fetchFavoriteOffersAction={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoritesScreen without offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history ={browserHistory}>
              <FavoritesScreen
                favoriteOffers={[]}
                isFavoriteOffersLoaded={false}
                fetchFavoriteOffersAction={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
