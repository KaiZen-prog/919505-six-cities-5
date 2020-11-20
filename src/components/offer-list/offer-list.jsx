import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferCard from "../offer-card/offer-card";
import {selectCurrentCityOffers} from "../../store/selectors/offers/select-city-offers";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentCityOffers, offerCardArticleClass, offerCardImgWrapperClass} = this.props;

    return (
      <>
        {currentCityOffers.map((offer) => (
          <OfferCard
            offer={offer}
            articleClass={offerCardArticleClass}
            imgWrapperClass={offerCardImgWrapperClass}
            key={offer.id}
          />
        ))}
      </>
    );
  }
}

OfferList.propTypes = {
  currentCityOffers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,

  offerCardArticleClass: PropTypes.string.isRequired,
  offerCardImgWrapperClass: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const data = {state};
  return {
    currentCityOffers: selectCurrentCityOffers(data)
  };
};

export {OfferList};
export default connect(mapStateToProps)(OfferList);
