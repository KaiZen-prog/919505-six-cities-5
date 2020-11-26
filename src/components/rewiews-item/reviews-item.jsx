import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {RATING_SCALE_MULTIPLIER} from "../../const";

const ReviewsItem = (props) => {
  const {review} = props;

  return (
    <React.Fragment>
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.author.avatar} width="54" height="54" alt="ReviewsList avatar"/>
          </div>
          <span className="reviews__user-name">
            {review.author.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${Math.round(review.rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.text}
          </p>
          <time className="reviews__time" dateTime={review.date}>{moment(review.date).format(`MMMM YYYY`)}</time>
        </div>
      </li>
    </React.Fragment>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default ReviewsItem;
