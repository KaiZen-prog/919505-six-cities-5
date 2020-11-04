import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {OfferCardArticleClasses, OfferCardImgWrapperClasses, CityMapClasses} from "../../const";

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import CitiesNav from "../cities-nav/cities-nav";
import OfferList from "../offer-list/offer-list";
import CityMap from "../city-map/city-map";
import OffersSort from "../../offers-sort/offers-sort";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentCity,
      currentCityOffers,
      onCityClick,
      onOffersSortChange
    } = this.props;

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={`/favorites`} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>

          <div className="tabs">
            <section className="locations container">
              <CitiesNav
                currentCity={currentCity}
                onCityClick={onCityClick}
              />
            </section>
          </div>

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
                <OffersSort
                  onOffersSortChange={onOffersSortChange}
                />
                <div className="cities__places-list places__list tabs__content">
                  <OfferList
                    offers={currentCityOffers}
                    offerCardArticleClass={OfferCardArticleClasses.MAIN_SCREEN}
                    offerCardImgWrapperClass={OfferCardImgWrapperClasses.MAIN_SCREEN}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <CityMap
                  offers={currentCityOffers}
                  cityMapClass = {CityMapClasses.MAIN_SCREEN}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainScreen.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentCityOffers: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onOffersSortChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  currentCityOffers: state.currentCityOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },

  onOffersSortChange(sort) {
    dispatch(ActionCreator.changeOffersSort(sort));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
