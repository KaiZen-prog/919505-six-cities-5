import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import OfferCard from "../offer-card/offer-card";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {offers, OfferCardArticleClass, OfferCardImgWrapperClass} = this.props;

    return (
      <React.Fragment>
        {offers.map((offer) => (
          <OfferCard
            offer={offer}
            OfferCardArticleClass={OfferCardArticleClass}
            OfferCardImgWrapperClass={OfferCardImgWrapperClass}
            onCardHover={() => {
              const currentOffer = offers.find((off) => {
                return off.id === offer.id;
              });
              this.setState({
                activeCard: currentOffer,
              });
            }}
            key={offer.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired,

  OfferCardArticleClass: PropTypes.string.isRequired,
  OfferCardImgWrapperClass: PropTypes.string.isRequired
};

export default OfferList;
