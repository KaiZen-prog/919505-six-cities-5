import React from "react";
import renderer from "react-test-renderer";
import {CityMap} from "./city-map";
import {offers} from "../../__mocks__/mocks";
import {CityMapClasses} from "../../const";


test(`CityMap render correctly`, () => {
  const tree = renderer
    .create(
        <CityMap
          offers={offers}
          cityMapClass={CityMapClasses.MAIN_SCREEN}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
