import renderer from 'react-test-renderer';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import MainFooter from './main-footer';

test(`MainFooter render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MainFooter/>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
