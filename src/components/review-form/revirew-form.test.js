import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";

const noop = () => {};

describe(`ReviewForm render correctly`, () => {
  it(`ReviewForm without error`, () => {
    const initialState = {
      buttonDisabled: true,
      textAreaDisabled: false,
      startDisabled: false,
      text: ``,
      rating: ``,
      error: false,
      errorText: ``,
    };

    const tree = renderer
      .create(
          <ReviewForm
            onSubmit={noop}
            state={initialState}
            onTextInputChange={noop}
            onRatingChange={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm with error`, () => {
    const initialState = {
      buttonDisabled: true,
      textAreaDisabled: false,
      startDisabled: false,
      text: ``,
      rating: ``,
      error: true,
      errorText: `Some error`,
    };

    const tree = renderer
      .create(
          <ReviewForm
            onSubmit={noop}
            state={initialState}
            onTextInputChange={noop}
            onRatingChange={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

