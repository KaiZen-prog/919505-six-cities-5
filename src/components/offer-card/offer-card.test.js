import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {offers, InitialState} from "../../__mocks__/mocks";
import {OfferCardArticleClasses, OfferCardImgWrapperClasses, FavoriteButtonTypes} from "../../const";

const mockStore = configureStore();
const store = mockStore(InitialState);
const noop = () => {};

describe(`OfferCard with authorized user`, () => {
  it(`OfferCard on main screen`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferCard
                offer={offers[0]}
                authorizationStatus={true}
                articleClass={OfferCardArticleClasses.MAIN_SCREEN}
                imgWrapperClass={OfferCardImgWrapperClasses.MAIN_SCREEN}
                onCardActivate={noop}
                onCardClick={noop}
                changeFavoriteStatusAction={{noop}}
                favoriteButtonType={FavoriteButtonTypes.MAIN_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferCard on favorites screen`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferCard
                offer={offers[0]}
                authorizationStatus={true}
                articleClass={OfferCardArticleClasses.FAVORITES_SCREEN}
                imgWrapperClass={OfferCardImgWrapperClasses.FAVORITES_SCREEN}
                onCardActivate={noop}
                onCardClick={noop}
                changeFavoriteStatusAction={{noop}}
                favoriteButtonType={FavoriteButtonTypes.FAVORITES_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferCard on nearby offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferCard
                offer={offers[0]}
                authorizationStatus={true}
                articleClass={OfferCardArticleClasses.OFFER_SCREEN}
                imgWrapperClass={OfferCardImgWrapperClasses.OFFER_SCREEN}
                onCardActivate={noop}
                onCardClick={noop}
                changeFavoriteStatusAction={{noop}}
                favoriteButtonType={FavoriteButtonTypes.OFFER_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe(`OfferCard with unauthorized user`, () => {
  it(`OfferCard on main screen`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferCard
                offer={offers[0]}
                authorizationStatus={false}
                articleClass={OfferCardArticleClasses.MAIN_SCREEN}
                imgWrapperClass={OfferCardImgWrapperClasses.MAIN_SCREEN}
                onCardActivate={noop}
                onCardClick={noop}
                changeFavoriteStatusAction={{noop}}
                favoriteButtonType={FavoriteButtonTypes.MAIN_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferCard on favorites screen`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferCard
                offer={offers[0]}
                authorizationStatus={false}
                articleClass={OfferCardArticleClasses.FAVORITES_SCREEN}
                imgWrapperClass={OfferCardImgWrapperClasses.FAVORITES_SCREEN}
                onCardActivate={noop}
                onCardClick={noop}
                changeFavoriteStatusAction={{noop}}
                favoriteButtonType={FavoriteButtonTypes.FAVORITES_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferCard on nearby offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferCard
                offer={offers[0]}
                authorizationStatus={false}
                articleClass={OfferCardArticleClasses.OFFER_SCREEN}
                imgWrapperClass={OfferCardImgWrapperClasses.OFFER_SCREEN}
                onCardActivate={noop}
                onCardClick={noop}
                changeFavoriteStatusAction={{noop}}
                favoriteButtonType={FavoriteButtonTypes.OFFER_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
