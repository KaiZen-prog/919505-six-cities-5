import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item";
import {reviews} from "../../__mocks__/mocks";

test(`ReviewsItem without error`, () => {
  const tree = renderer
    .create(
        <ReviewsItem
          review={reviews[0]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

