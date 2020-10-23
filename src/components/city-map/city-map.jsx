import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import {CityMapSettings} from "../../const";

const icon = leaflet.icon({
  iconUrl: CityMapSettings.ICON_URL,
  iconSize: CityMapSettings.ICON_SIZE
});

class CityMap extends PureComponent {
  constructor(props) {
    super(props);

    this.markers = [];
  }

  componentDidMount() {
    const {offers} = this.props;

    this.map = leaflet.map(`map`, {
      center: CityMapSettings.CITY,
      zoom: CityMapSettings.ZOOM,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.setMap(offers);
  }

  componentDidUpdate() {
    const {offers} = this.props;
    this.setMap(offers);
  }

  render() {
    const {cityMapClass} = this.props;

    return (
      <React.Fragment>
        <section id="map" className={cityMapClass}></section>
      </React.Fragment>
    );
  }

  setMap(offers) {
    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });

    offers.forEach((offer) => {
      this.markers.push(
          leaflet.marker(offer.coords, {icon}).addTo(this.map)
      );
    });

    this.map.setView(CityMapSettings.CITY, CityMapSettings.ZOOM);
  }
}

CityMap.propTypes = {
  offers: PropTypes.array.isRequired,
  cityMapClass: PropTypes.string.isRequired
};

export default CityMap;
