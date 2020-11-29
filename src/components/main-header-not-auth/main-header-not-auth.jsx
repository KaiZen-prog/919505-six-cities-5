import React from 'react';
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

export const MainHeaderNotAuth = () => {
  return (
    <div className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">
        <Link to={AppRoute.LOGIN}> Sign In </Link>
      </span>
    </div>
  );
};
