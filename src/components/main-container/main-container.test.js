import React from "react";
import renderer from "react-test-renderer";
import MainContainer from "./main-container";
import {offers} from "../../__mocks__/mocks";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {InitialState} from "../../__mocks__/mocks";

const mockStore = configureStore();

describe(`MainContainer render correctly`, () => {
  const store = mockStore(InitialState);

  it(`MainContainer with loaded offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history ={browserHistory}>
              <MainContainer
                withOffers={true}
                currentCityOffers={offers}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MainContainer without offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history ={browserHistory}>
              <MainContainer
                withOffers={false}
                currentCityOffers={[]}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
