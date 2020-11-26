import React from 'react';
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const MainHeaderAuth = (props) => {
  const {userData} = props;
  return (
    <div className="header__nav-link header__nav-link--profile">
      <img className="header__avatar-wrapper" src={userData.avatarUrl} alt="avatar"/>
      <span className="header__user-name user__name">
        <Link to={AppRoute.FAVORITES}> {userData.email} </Link>
      </span>
    </div>
  );
};

MainHeaderAuth.propTypes = {
  userData: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({USER}) => {
  return {
    userData: USER.data
  };
};

export {MainHeaderAuth};
export default connect(mapStateToProps)(MainHeaderAuth);
