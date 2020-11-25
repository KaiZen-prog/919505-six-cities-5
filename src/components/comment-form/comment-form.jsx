import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ReviewFormState, STAR_VALUES, ReviewLength} from "../../const";
import {setReviewFormStateAction} from "../../store/action";
import {postReview} from "../../store/api-actions";

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      review: ``,
      rating: ``,
      isFormDisabled: false,
      isSubmitDisabled: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  setFormState(event) {
    switch (event) {
      case ReviewFormState.SENDING_ERROR:
        this.setState(() => ({
          isFormDisabled: false
        }));
        break;
      case ReviewFormState.POSTING_REVIEW:
        this.setState(() => ({
          isFormDisabled: true
        }));
        break;

      case ReviewFormState.EDITING:
        this.setState(() => ({
          isFormDisabled: false,
          isSubmitDisabled: !this.state.rating ||
            this.state.review.length < ReviewLength.MIN ||
            this.state.review.length > ReviewLength.MAX
        }));
    }
  }

  componentDidUpdate() {
    const {reviewFormState} = this.props;
    this.setFormState(reviewFormState);
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    const {onEdit} = this.props;
    onEdit();
    this.setState({[name]: value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {review, rating} = this.state;
    const {offerId, onSubmit} = this.props;
    onSubmit(review, rating, offerId);
    this.setState(() => ({
      review: ``,
      rating: 0,
      isFormDisabled: false
    }));
  }

  render() {
    const {review, rating, isSubmitDisabled} = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="reviews__form form"
        action="#"
        method="post"
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {
            STAR_VALUES.map(({starValue, title}) => {
              return (
                <React.Fragment key={`rating-value-${starValue}`}>
                  <input
                    onChange={this.handleFieldChange}
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value={starValue}
                    id={`${starValue}-stars`}
                    type="radio"
                    checked={(starValue - rating) === 0}
                  />
                  <label
                    htmlFor={`${starValue}-stars`}
                    className="reviews__rating-label form__rating-label"
                    title={title}
                  >
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>
                </React.Fragment>
              );
            })
          }
        </div>
        <textarea
          onChange={this.handleFieldChange}
          className="reviews__textarea form__textarea"
          value={review}
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved">
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  reviewFormState: PropTypes.string.isRequired
};


const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
  offerId: state.APP_PROCESS.clickedCard,
  reviewFormState: state.APP_PROCESS.reviewFormState,
});

const mapDispatchToProps = (dispatch) => ({
  onEdit() {
    dispatch(setReviewFormStateAction(ReviewFormState.EDITING));
  },

  onSubmit(review, rating, offerId) {
    dispatch(setReviewFormStateAction(ReviewFormState.POSTING_REVIEW));
    dispatch(postReview({review, rating, offerId}));
  }
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
