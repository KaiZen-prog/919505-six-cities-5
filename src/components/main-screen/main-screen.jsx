import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainHeader from "../main-header/main-header";
import CitiesNav from "../cities-nav/cities-nav";
import MainContainer from "../main-container/main-container";
import {selectCurrentCityOffers} from "../../store/selectors/offers/select-city-offers";

const MainScreen = (props) => {
  const {currentCityOffers} = props;
  const withOffers = currentCityOffers.length > 0;

  return (
    <div className="page page--gray page--main">
      <MainHeader/>
      <main className={`page__main page__main--index ${withOffers ? `` : `page__main--index-empty` }`}>
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">
            <CitiesNav/>
          </section>
        </div>
        <MainContainer
          currentCityOffers={currentCityOffers}
          withOffers = {withOffers}
        />
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  currentCityOffers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  const data = {state};
  return {
    currentCityOffers: selectCurrentCityOffers(data)
  };
};

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
