import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const OfferList = (props) => {
  const {offers, offerCardArticleClass, offerCardImgWrapperClass, favoriteButtonType} = props;
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          articleClass={offerCardArticleClass}
          imgWrapperClass={offerCardImgWrapperClass}
          favoriteButtonType={favoriteButtonType}
          key={offer.id}
        />
      ))}
    </>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,

  offerCardArticleClass: PropTypes.string.isRequired,
  offerCardImgWrapperClass: PropTypes.string.isRequired,
  favoriteButtonType: PropTypes.string.isRequired
};
export default OfferList;
