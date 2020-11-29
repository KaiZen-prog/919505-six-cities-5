import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";
import MainHeaderAuth from "../main-header-auth/main-header-auth";
import {MainHeaderNotAuth} from "../main-header-not-auth/main-header-not-auth";
import {Link} from "react-router-dom";

const MainHeader = (props) => {
  const {isUserAuthorized} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.ROOT}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {(isUserAuthorized === AuthorizationStatus.AUTH) ? <MainHeaderAuth/> : <MainHeaderNotAuth/>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

MainHeader.propTypes = {
  isUserAuthorized: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    isUserAuthorized: state.USER.authorizationStatus
  };
};

export {MainHeader};
export default connect(mapStateToProps)(MainHeader);
