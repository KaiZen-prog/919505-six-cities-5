import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {offers, InitialState} from "../../__mocks__/mocks";
import {OfferCardArticleClasses, OfferCardImgWrapperClasses, FavoriteButtonTypes} from "../../const";

const mockStore = configureStore();
const store = mockStore(InitialState);

describe(`OfferList render correctly`, () => {
  it(`OfferList on main screen`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferList
                offers={offers}
                offerCardArticleClass={OfferCardArticleClasses.MAIN_SCREEN}
                offerCardImgWrapperClass={OfferCardImgWrapperClasses.MAIN_SCREEN}
                favoriteButtonType={FavoriteButtonTypes.MAIN_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferList on favorites screen`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferList
                offers={offers}
                offerCardArticleClass={OfferCardArticleClasses.FAVORITES_SCREEN}
                offerCardImgWrapperClass={OfferCardImgWrapperClasses.FAVORITES_SCREEN}
                favoriteButtonType={FavoriteButtonTypes.FAVORITES_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferList on nearby offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <OfferList
                offers={offers}
                offerCardArticleClass={OfferCardArticleClasses.OFFER_SCREEN}
                offerCardImgWrapperClass={OfferCardImgWrapperClasses.OFFER_SCREEN}
                favoriteButtonType={FavoriteButtonTypes.OFFER_SCREEN}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
