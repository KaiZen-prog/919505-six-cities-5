import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import withLoginForm from "../../hocs/with-login-form/with-login-form";
import {AppRoute} from "../../const";
import MainHeader from "../main-header/main-header";

const LogInScreen = (props) => {
  const {onSubmit, formRef, isValid, currentCity} = props;

  return (
    <div className="page page--gray page--login">
      <MainHeader/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={onSubmit}
              className="login__form form"
              action="#"
              method="post"
              ref={formRef}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  defaultValue=""
                  autoComplete="off"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                  defaultValue=""
                  autoComplete="off"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
              {!isValid && <p style={{color: `red`}}>Invalid Email</p>}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.ROOT}>
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LogInScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formRef: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
  currentCity: PropTypes.string.isRequired
};

export {LogInScreen};
export default withLoginForm(LogInScreen);
