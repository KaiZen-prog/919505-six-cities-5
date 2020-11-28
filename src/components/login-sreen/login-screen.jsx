import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';
import {AppRoute} from "../../const";
import MainHeader from "../main-header/main-header";

const LogInScreen = ({onSubmit, currentCity}) => {
  const emailRef = createRef();
  const passwordRef = createRef();

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();

    const authData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    onSubmit(authData);
  };

  return (
    <div className="page page--gray page--login">
      <MainHeader/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleLoginSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  ref={emailRef}
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
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
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
  currentCity: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (authInfo) => dispatch(login(authInfo))
});

const mapStateToProps = (state) => ({
  currentCity: state.APP_PROCESS.currentCity
});

export {LogInScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);
