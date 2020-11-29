import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {postReview} from '../store/api-actions';

const withReviewForm = (Component) => {
  class WithReview extends React.PureComponent {
    constructor() {
      super();

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTextInput = this.handleTextInput.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);

      this.state = {
        review: ``,
        rating: 0,
        buttonDisabled: true,
        textAreaDisabled: false,
        starDisabled: false,
        error: false,
        errorText: ``,
        isLoading: false,
      };
    }

    componentDidUpdate() {
      this._validate(this.state);
    }

    _validate(state) {
      this.setState({buttonDisabled: !(
        state.review.length >= 50
          && state.review.length <= 300
          && state.rating > 0
          && this.state.isLoading === false
      )});
    }

    _unlock() {
      this.setState({
        buttonDisabled: true,
        starDisabled: false,
        textAreaDisabled: false});
    }

    _reset() {
      this.setState({
        review: ``,
        rating: 0,
        buttonDisabled: true});
    }

    handleTextInput(evt) {
      this.setState({review: evt.target.value});
    }

    handleRatingChange(evt) {
      this.setState({rating: evt.target.value});
    }

    handleSubmit(evt) {
      evt.preventDefault();
      this.setState({
        textAreaDisabled: true,
        starDisabled: true,
        buttonDisabled: true,
        isLoading: true,
      });

      this.props.sendReviewAction(this.state.review, this.state.rating, this.props.offerId)
        .then(() => {
          this._unlock();
          this._reset();
          this.setState({isLoading: false});
        })
        .catch((err) => {
          this._unlock();
          this._validate(this.state);

          this.setState({error: true, errorText: err.message});
          this.setState({isLoading: false});
        });
    }

    render() {
      return <Component
        state={this.state}
        onTextInputChange={this.handleTextInput}
        onRatingChange={this.handleRatingChange}
        onSubmit={this.handleSubmit}/>;
    }
  }

  WithReview.propTypes = {
    sendReviewAction: PropTypes.func.isRequired,
    offerId: PropTypes.number.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    sendReviewAction(review, rating, offerId) {
      return dispatch(postReview({review, rating, offerId}));
    }
  });

  return connect(null, mapDispatchToProps)(WithReview);
};

export {withReviewForm};
export default withReviewForm;
