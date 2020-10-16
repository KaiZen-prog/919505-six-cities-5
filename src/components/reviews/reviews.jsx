import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {RATING_SCALE_MULTIPLIER} from "../../const";

class Reviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews} = this.props;

    return (
      <React.Fragment>
        {reviews.map((review, i) => (
          <ul key={i} className="reviews__list">
            <li className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={`img/${review.author.avatar}`} width="54" height="54" alt="Reviews avatar"/>
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
          </ul>
        ))}
      </React.Fragment>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
};

export default Reviews;
