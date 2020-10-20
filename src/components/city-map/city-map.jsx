import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import {CityMapSettings} from "../../const";

class CityMap extends PureComponent {
  componentDidMount() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: CityMapSettings.ICON_URL,
      iconSize: CityMapSettings.ICON_SIZE
    });

    const map = leaflet.map(`map`, {
      center: CityMapSettings.CITY,
      zoom: CityMapSettings.ZOOM,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coords, {icon})
        .addTo(map);
    });

    map.setView(CityMapSettings.CITY, CityMapSettings.ZOOM);
  }

  render() {
    return (
      <section id="map" className="cities__map map"></section>
    );
  }
}

CityMap.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default CityMap;
