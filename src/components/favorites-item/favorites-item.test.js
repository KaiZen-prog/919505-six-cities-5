import React from "react";
import renderer from "react-test-renderer";
import FavoritesItem from "./favorites-item";
import {Cities} from "../../const";
import {offers} from "../../__mocks__/mocks";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {InitialState} from "../../__mocks__/mocks";

const mockStore = configureStore();

test(`FavoritesItem render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history ={browserHistory}>
            <FavoritesItem
              city={Cities[0]}
              offers={offers}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
