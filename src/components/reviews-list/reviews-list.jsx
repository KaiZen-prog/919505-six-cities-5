import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import ReviewsItem from "../rewiews-item/reviews-item";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews} = this.props;

    return (
      <ul className="reviews__list">
        {reviews.map((review, i) => (
          <ReviewsItem
            review={review}
            key={i}
          />
        ))}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
