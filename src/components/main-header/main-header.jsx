import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";
import AuthHeader from "./components/auth-header/auth-header";
import {NotAuthHeader} from "./components/noauth-header/noauth-header";
import {Link} from "react-router-dom";

class MainHeader extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {isUserAuthorized} = this.props;
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
                  {(isUserAuthorized === AuthorizationStatus.AUTH) ? <AuthHeader/> : <NotAuthHeader/>}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

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
