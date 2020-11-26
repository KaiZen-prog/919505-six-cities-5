import React from "react";
import renderer from "react-test-renderer";
import {LogInScreen} from "./login-screen";
import {Cities} from "../../const";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {InitialState} from "../../__mocks__/mocks";

const mockStore = configureStore();
const noop = () => {};

test(`LogInScreen render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history ={browserHistory}>
            <LogInScreen
              onSubmit={noop}
              currentCity={Cities[0]}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
