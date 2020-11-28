import React from "react";
import renderer from "react-test-renderer";
import {CitiesNavItem} from "./cities-nav-item";
import {Cities} from "../../const";

const noop = () => {};

test(`CitiesNav render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesNavItem
          city={Cities[0]}
          currentCity={Cities[0]}
          onCityClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
