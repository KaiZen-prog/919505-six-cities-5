import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import configureStore from 'redux-mock-store';
import {InitialState} from "../../__mocks__/mocks";
import MainScreen from "./main-screen";

const mockStore = configureStore();


test(`MainScreen render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history ={browserHistory}>
            <MainScreen/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
