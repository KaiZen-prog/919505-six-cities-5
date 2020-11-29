import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {withReviewForm} from './with-review-form';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {InitialState} from '../../__mocks__/mocks';
import browserHistory from '../../browser-history';

const mockStore = configureStore();
const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withReviewForm(MockComponent);

it(`withReview is rendered correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={browserHistory}>
          <MockComponentWrapped
            sendReview={noop}
            offerId={1}
            loading={false}
          />
        </Router>
      </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
