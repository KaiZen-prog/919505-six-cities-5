import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OffersSort} from './offers-sort';

configure({adapter: new Adapter()});

const noop = () => {};

test(`OffersSort on toggle`, () => {
  const togglePanel = jest.fn();

  const wrapper = shallow(
      <OffersSort
        isOffersSortOpened={false}
        currentOffersSort={`POPULAR`}
        togglePanel={togglePanel}
        onOffersSortChange={noop}
      />
  );

  wrapper.find(`.places__sorting-type`).simulate(`click`, {preventDefault: () => {}});
  expect(togglePanel).toHaveBeenCalledTimes(1);
});


