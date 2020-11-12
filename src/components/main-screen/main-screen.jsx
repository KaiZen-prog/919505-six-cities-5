import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {CitiesContainersClasses} from "../../const";
import CitiesNav from "../cities-nav/cities-nav";
import MainContainer from "../main-container/main-container";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  // Перерисовываем компонент только если переключаемся с города,
  // содержащего предложения на город без предложений; или с города без предложений на город с.
  shouldComponentUpdate(nextProps) {
    if (this.props.currentCityOffers.length > 0 && nextProps.currentCityOffers.length > 0) {
      return false;
    }
    return !(this.props.currentCityOffers.length === 0 && nextProps.currentCityOffers.length === 0);
  }

  render() {
    const {currentCityOffers} = this.props;
    const withOffers = currentCityOffers.length > 0;

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

        <main className={withOffers
          ? CitiesContainersClasses.MAIN.WITH_OFFERS
          : CitiesContainersClasses.MAIN.NO_OFFERS
        }>
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
  currentCityOffers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  currentCityOffers: state.currentCityOffers
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
