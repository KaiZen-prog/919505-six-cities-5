import React from 'react';
import PropTypes from 'prop-types';
import {changeCity} from "../../store/action";
import {connect} from "react-redux";

const CitiesNavItem = ({city, currentCity, onCityClick}) => {
  return (
    <>
      <li className="locations__item">
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onCityClick(city);
          }}
          className={`locations__item-link tabs__item${city === currentCity ? ` tabs__item--active` : ``}`}
          href="#"
        >
          <span>{city}</span>
        </a>
      </li>
    </>
  );
};

CitiesNavItem.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP_PROCESS}) => ({
  currentCity: APP_PROCESS.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(changeCity(city));
  },
});

export {CitiesNavItem};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesNavItem);
