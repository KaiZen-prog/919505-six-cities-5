import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {selectCurrentCityOffers} from "../../store/selectors/offers/select-city-offers";

const CitiesHeader = ({currentCityOffers, currentCity}) => {
  return (
    <>
      <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
    </>
  );
};

CitiesHeader.propTypes = {
  currentCityOffers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const data = {state};
  return {
    currentCityOffers: selectCurrentCityOffers(data),
    currentCity: state.APP_PROCESS.currentCity,
  };
};

export {CitiesHeader};
export default connect(mapStateToProps)(CitiesHeader);
