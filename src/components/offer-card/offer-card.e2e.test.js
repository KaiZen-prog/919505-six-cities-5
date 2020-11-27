import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {offers} from '../../__mocks__/mocks';
import {OfferCard} from './offer-card';
import {FavoriteButtonTypes, OfferCardArticleClasses, OfferCardImgWrapperClasses} from "../../const";

configure({adapter: new Adapter()});

const noop = () => {};

test(`OfferCard on activate`, () => {
  const onCardActivate = jest.fn();
  const onCardClick = jest.fn();

  const wrapper = shallow(
      <OfferCard
        offer={offers[0]}
        authorizationStatus={`AUTH`}
        articleClass={OfferCardArticleClasses.MAIN_SCREEN}
        imgWrapperClass={OfferCardImgWrapperClasses.MAIN_SCREEN}
        onCardActivate={onCardActivate}
        onCardClick={onCardClick}
        changeFavoriteStatusAction={noop}
        favoriteButtonType={FavoriteButtonTypes.MAIN_SCREEN}
      />
  );

  wrapper.find(`article`).simulate(`mouseEnter`, {preventDefault: () => {}});
  expect(onCardActivate).toHaveBeenCalledTimes(1);

  wrapper.find(`article`).simulate(`mouseLeave`, {preventDefault: () => {}});
  expect(onCardActivate).toHaveBeenCalledTimes(2);

  wrapper.find(`#card-image-link`).simulate(`click`, {preventDefault: () => {}});
  expect(onCardClick).toHaveBeenCalledTimes(1);

  wrapper.find(`#card-name-link`).simulate(`click`, {preventDefault: () => {}});
  expect(onCardClick).toHaveBeenCalledTimes(2);
});

