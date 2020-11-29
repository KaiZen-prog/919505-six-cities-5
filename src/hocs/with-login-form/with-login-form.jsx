import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import PropTypes from "prop-types";

const withLoginForm = (Component) => {
  class WithAuthorization extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: true,
      };

      this.handleFromSubmit = this.handleFromSubmit.bind(this);
      this.formRef = React.createRef();
    }

    _validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    handleFromSubmit(evt) {
      evt.preventDefault();
      const formData = new FormData(this.formRef.current);
      const email = formData.get(`email`);

      if (this._validateEmail(email)) {
        this.props.loginAction(email, formData.get(`password`));
      } else {
        this.setState(({isValid: false}));
      }
    }

    render() {
      return <Component onSubmit={this.handleFromSubmit}
        formRef={this.formRef}
        isValid={this.state.isValid}
        currentCity ={this.props.currentCity}/>;
    }
  }

  WithAuthorization.propTypes = PropTypes.func.isRequired;
  return WithAuthorization;

};

const mapStateToProps = (state) => {
  return {
    currentCity: state.APP_PROCESS.currentCity
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginAction(email, password) {
    return dispatch(login({email, password}));
  }
});

const composedWithAuthorization = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoginForm
);

export {withLoginForm};
export default composedWithAuthorization;
