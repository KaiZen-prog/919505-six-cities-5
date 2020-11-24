import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ReviewsItem from "../rewiews-item/reviews-item";
import {fetchReviewsList} from "../../store/api-actions";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);

    const {getReviewsAction, offerId} = this.props;
    getReviewsAction(offerId);
  }

  render() {
    const {reviews} = this.props;

    return (
      <>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          {reviews.map((review, i) => (
            <ReviewsItem
              review={review}
              key={i}
            />
          ))}
        </ul>
      </>
    );
  }
}

ReviewsList.propTypes = {
  offerId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  getReviewsAction: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  getReviewsAction(offerId) {
    dispatch(fetchReviewsList(offerId));
  },
});

const mapStateToProps = (state) => {
  return {
    offerId: state.APP_PROCESS.clickedCard,
    reviews: state.APP_DATA.reviews,
  };
};


export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
