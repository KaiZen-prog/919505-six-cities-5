import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {RATING_SCALE_MULTIPLIER} from "../../const";

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, articleClass, imgWrapperClass, onActiveCard} = this.props;

    return (
      <article
        className={articleClass}
        onMouseEnter={() => {
          onActiveCard(offer.id);
        }}
        onFocus={() => {
          onActiveCard(offer.id);
        }}
        onMouseLeave={() => {
          onActiveCard(null);
        }}
        onBlur={() => {
          onActiveCard(null);
        }}
      >
        {offer.isPremium
          ? <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : ``
        }
        <div className={imgWrapperClass}>
          <Link to={`/offer/` + offer.id}>
            <img className="place-card__image" src={`img/${offer.poster}`} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={
                offer.isInBookmarks
                  ? `place-card__bookmark-button place-card__bookmark-button--active button`
                  : `place-card__bookmark-button place-card__bookmark-button button`
              }
              type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${Math.round(offer.rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/` + offer.id}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    poster: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isInBookmarks: PropTypes.bool.isRequired
  }).isRequired,

  articleClass: PropTypes.string.isRequired,
  imgWrapperClass: PropTypes.string.isRequired,
  onActiveCard: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onActiveCard(id) {
    dispatch(ActionCreator.getActiveCard(id));
  }
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
