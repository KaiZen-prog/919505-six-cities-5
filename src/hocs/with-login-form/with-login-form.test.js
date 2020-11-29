import React from "react";
import renderer from "react-test-renderer";
import PropTypes from 'prop-types';
import {withLoginForm} from "./with-login-form";

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withLoginForm(MockComponent);

it(`withAuthorization is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        loginAction={noop}
        currentCity={`Paris`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
