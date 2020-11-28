import React from 'react';
import {Cities} from "../../const";
import CitiesNavItem from "../cities-nav-item/cities-nav-item";

const CitiesNav = () => {
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city, index) => (
        <CitiesNavItem
          city={city}
          key={`city-${index}`}
        />
      ))}
    </ul>
  );
};

export default CitiesNav;
