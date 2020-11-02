import React from 'react';
import PropTypes from 'prop-types';
import {CITIES} from "../../const";

const CitiesNav = ({currentCity, onCityClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, index) => (
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

export default CitiesNav;
