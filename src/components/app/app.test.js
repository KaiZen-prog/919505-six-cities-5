import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './app';
import {InitialState} from '../../__mocks__/mocks';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

test(`App render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
