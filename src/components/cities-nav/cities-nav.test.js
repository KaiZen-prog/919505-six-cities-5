import React from "react";
import renderer from "react-test-renderer";
import CitiesNav from "./cities-nav";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {InitialState} from "../../__mocks__/mocks";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

test(`CitiesNav render correctly`, () => {
  const store = mockStore(InitialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <CitiesNav/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

