import React from "react";
import renderer from "react-test-renderer";
import MainHeader from "./main-header";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {InitialState} from "../../__mocks__/mocks";

const mockStore = configureStore();

describe(`MainHeader render correctly`, () => {
  const store = mockStore(InitialState);

  it(`MainHeader with authenticated user`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history ={browserHistory}>
              <MainHeader
                isUserAuthorized={true}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MainHeader without authenticated user`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history ={browserHistory}>
              <MainHeader
                isUserAuthorized={false}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
