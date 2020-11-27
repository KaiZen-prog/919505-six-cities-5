import React from "react";
import renderer from "react-test-renderer";
import PrivateRoute from "./private-route";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {AppRoute} from "../../const";
import {FavoritesScreen} from "../favorites-screen/favorites-screen";

const mockStore = configureStore();

describe(`PrivateRoute render correctly`, () => {
  it(`PrivateRoute auth`, () => {
    const initialState = {
      USER: {
        authorizationStatus: `AUTH`
      }
    };

    const store = mockStore(initialState);

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <PrivateRoute
                authorizationStatus={`AUTH`}
                exact
                path={AppRoute.FAVORITES}
                render={() => {
                  return (
                    <FavoritesScreen/>
                  );
                }}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`PrivateRoute noauth`, () => {
    const initialState = {
      USER: {
        authorizationStatus: `NO_AUTH`
      }
    };

    const store = mockStore(initialState);

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <PrivateRoute
                authorizationStatus={`NO_AUTH`}
                exact
                path={AppRoute.FAVORITES}
                render={() => {
                  return (
                    <FavoritesScreen/>
                  );
                }}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

