import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

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

const mapStateToProps = ({APP_ACTIONS}) => ({
  currentCityOffers: APP_ACTIONS.currentCityOffers,
  currentCity: APP_ACTIONS.currentCity,
});

export {CitiesHeader};
export default connect(mapStateToProps)(CitiesHeader);
