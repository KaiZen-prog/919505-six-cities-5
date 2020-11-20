import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainHeader from "../main-header/main-header";
import CitiesNav from "../cities-nav/cities-nav";
import MainContainer from "../main-container/main-container";
import {selectCurrentCityOffers} from "../../store/selectors/offers/select-city-offers";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  // Перерисовываем компонент только если переключаемся с города,
  // содержащего предложения на город без предложений; или с города без предложений на город с.
  shouldComponentUpdate(nextProps) {
    return this.props.withOffers !== nextProps.withOffers;
  }

  render() {
    const {withOffers} = this.props;

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
            withOffers = {withOffers}
          />
        </main>
      </div>
    );
  }
}

MainScreen.propTypes = {
  withOffers: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const data = {state};
  return {
    withOffers: selectCurrentCityOffers(data).length > 0,
  };
};

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
