import React from "react";
import renderer from "react-test-renderer";
import {MainHeaderAuth} from "./main-header-auth";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {InitialState, userData} from "../../__mocks__/mocks";

const mockStore = configureStore();

test(`MainHeaderAuth render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history ={browserHistory}>
            <MainHeaderAuth
              userData={userData}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
