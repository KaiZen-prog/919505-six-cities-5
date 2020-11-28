import React from "react";
import renderer from "react-test-renderer";
import {CitiesHeader} from "./cities-header";
import {offers} from "../../__mocks__/mocks";
import {Cities} from "../../const";


test(`CitiesHeader render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesHeader
          currentCityOffers={offers}
          currentCity={Cities[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
