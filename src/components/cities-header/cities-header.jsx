import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const CitiesHeader = ({currentCityOffers, currentCity}) => {
  return (
    <React.Fragment>
      <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
    </React.Fragment>
  );
};

CitiesHeader.propTypes = {
  currentCityOffers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCityOffers: state.currentCityOffers,
  currentCity: state.currentCity,
});

export {CitiesHeader};
export default connect(mapStateToProps)(CitiesHeader);
