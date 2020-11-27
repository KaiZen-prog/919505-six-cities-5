import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {CitiesNavItem} from "./cities-nav-item";
import {Cities} from "../../const";

configure({adapter: new Adapter()});


test(`CitiesNav, click on City button`, () => {
  const onCityClick = jest.fn();

  const wrapper = shallow(
      <CitiesNavItem
        city={Cities[0]}
        currentCity={Cities[0]}
        onCityClick={onCityClick}
      />
  );

  wrapper.find(`.locations__item-link`).simulate(`click`, {preventDefault: () => {}});
  expect(onCityClick).toHaveBeenCalledTimes(1);
});
