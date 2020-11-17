import React from 'react';
import PropTypes from 'prop-types';
import {Cities} from "../../const";
import {changeCity} from "../../store/action";
import {connect} from "react-redux";

const CitiesNav = ({currentCity, onCityClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city, index) => (
        <li
          className="locations__item"
          key={`city-${index}`}
        >
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
      ))}
    </ul>
  );
};

CitiesNav.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP_ACTIONS}) => ({
  currentCity: APP_ACTIONS.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(changeCity(city));
  },
});

export {CitiesNav};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesNav);
