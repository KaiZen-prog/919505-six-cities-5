import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";
import {authHeader} from "./components/auth-header/auth-header";
import {notAuthHeader} from "./components/noauth-header/noauth-header";
import {Link} from "react-router-dom";

const MainHeader = ({appUser}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-linkheader__logo-link--active"
              to={AppRoute.ROOT}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {(appUser.authorizationStatus === AuthorizationStatus.NO_AUTH) ? notAuthHeader() : authHeader(appUser)}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

MainHeader.propTypes = {
  appUser: PropTypes.shape({
    authorizationStatus: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  })
};

const mapStateToProps = ({USER}) => {
  return {
    appUser: USER
  };
};

export {MainHeader};
export default connect(mapStateToProps)(MainHeader);
