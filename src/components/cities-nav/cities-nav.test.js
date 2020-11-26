import React from "react";
import renderer from "react-test-renderer";
import {CitiesNav} from "./cities-nav";
import {Cities} from "../../const";

const noop = () => {};

test(`CitiesNav render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesNav
          currentCity={Cities[0]}
          onCityClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

