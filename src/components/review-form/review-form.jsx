import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postReview} from "../../store/api-actions";
import {STAR_VALUES} from "../../const";

const FormFieldName = {
  REVIEW: `review`,
  RATING: `rating`,
};

const ReviewForm = (props) => {
  const {
    sendReviewAction,
    offerId,
    sendReviewError,
    reviewRequestStatus
  } = props;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const areaText = formData.get(FormFieldName.REVIEW);
    const currentRating = Number(formData.get(FormFieldName.RATING));
    evt.target.disabled = true;
    sendReviewAction(areaText, currentRating, offerId);
    evt.target.reset();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
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
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={starValue}
                  id={`${starValue}-stars`}
                  type="radio"
                  disabled={reviewRequestStatus ? `disabled` : ``}
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
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        maxLength="300"
        minLength="50"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={reviewRequestStatus ? `disabled` : ``}>
      </textarea>
      {sendReviewError
        ? <p style={{color: `red`}}>Error `{sendReviewError}`, please try later</p>
        : ``}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={reviewRequestStatus ? `disabled` : ``}>
          Submit
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  sendReviewAction: PropTypes.func.isRequired,
  sendReviewError: PropTypes.string,
  reviewRequestStatus: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendReviewAction: (review, rating, offerId) => dispatch(postReview({review, rating, offerId}))
});

const mapStateToProps = (state) => ({
  offerId: state.APP_PROCESS.clickedCard,
  sendReviewError: state.APP_DATA.postReviewError,
  reviewRequestStatus: state.APP_DATA.isReviewRequestPosted,
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
