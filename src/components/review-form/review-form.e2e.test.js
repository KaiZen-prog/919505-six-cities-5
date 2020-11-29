import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewForm from './review-form';

configure({adapter: new Adapter()});
const noop = () => {};

describe(`ReviewForm interactive`, () => {
  it(`text input changes correctly`, () => {
    const handleTextInputChange = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          onSubmit={noop}
          state={{}}
          onTextInputChange={handleTextInputChange}
          onRatingChange={noop}
        />);

    const textInput = wrapper.find(`.reviews__textarea`);
    textInput.simulate(`change`, {target: {value: `Hello`}});
    expect(handleTextInputChange).toHaveBeenCalledTimes(1);
  });

  it(`rating inputs change correctly`, () => {
    const handleRatingChange = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          onSubmit={noop}
          state={{}}
          onTextInputChange={noop}
          onRatingChange={handleRatingChange}
        />);

    const ratingInputs = wrapper.find(`.form__rating-input`);
    ratingInputs.forEach((node) => {
      node.simulate(`change`);
    });
    expect(handleRatingChange).toHaveBeenCalledTimes(5);
  });

  it(`ReviewForm is submitted correctly`, () => {
    const handleFormSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          onSubmit={handleFormSubmit}
          state={{}}
          onTextInputChange={noop}
          onRatingChange={noop}
        />);

    const reviewForm = wrapper.find(`.reviews__form`);
    reviewForm.simulate(`submit`);
    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });
});
