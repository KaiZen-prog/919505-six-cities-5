import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {login} from "../../store/api-actions";
import {AppRoute} from "../../const";
import MainHeader from "../main-header/main-header";

class SignInScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.state = {
      warning: ``,
      setWarning: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const setWarning = (error) => {
      return this.setState({
        warning: error
      });
    };
    this.setWarning = setWarning;
  }
  handleSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();

    onSubmit({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {

    const {currentCity} = this.props;
    const {warning} = this.state;

    return (
      <div className="page page--gray page--login">
        <MainHeader/>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form onSubmit={this.handleSubmit} className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={this.emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required="" />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={this.passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required="" />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
                <div className="warning_container">{warning}</div>
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
  }
}

SignInScreen.propTypes = {
  onSubmit: PropTypes.func,
  currentCity: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

const mapStateToProps = ({APP_PROCESS}) => {
  return {
    currentCity: APP_PROCESS.currentCity
  };
};
export {SignInScreen};
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
