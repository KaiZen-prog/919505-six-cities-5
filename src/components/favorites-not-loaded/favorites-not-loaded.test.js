import React from "react";
import renderer from "react-test-renderer";
import FavoritesNotLoaded from "./favorites-not-loaded";

test(`FavoritesNotLoaded render correctly`, () => {
  const tree = renderer
    .create(
        <FavoritesNotLoaded/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
