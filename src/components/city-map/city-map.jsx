import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {CityMapSettings, CityMapClasses} from "../../const";

const defaultIcon = leaflet.icon({
  iconUrl: CityMapSettings.DEFAULT_ICON_URL,
  iconSize: CityMapSettings.ICON_SIZE
});

const activeIcon = leaflet.icon({
  iconUrl: CityMapSettings.ACTIVE_ICON_URL,
  iconSize: CityMapSettings.ICON_SIZE
});

class CityMap extends PureComponent {
  constructor(props) {
    super(props);

    this.markers = [];
  }

  componentDidMount() {
    const {offers, activeCard, cityMapClass, clickedOfferCoords} = this.props;

    this.map = leaflet.map(`map`, {
      center: offers[0].cityCoords,
      zoom: offers[0].mapZoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.setMap(offers, activeCard, cityMapClass, clickedOfferCoords);
  }

  componentDidUpdate() {
    const {offers, activeCard, cityMapClass, clickedOfferCoords} = this.props;
    this.markers = [];
    this.setMap(offers, activeCard, cityMapClass, clickedOfferCoords);
  }

  render() {
    const {cityMapClass} = this.props;

    return (
      <React.Fragment>
        <section id="map" className={cityMapClass}></section>
      </React.Fragment>
    );
  }

  setMap(offers, activeCard, cityMapClass, clickedOfferCoords) {
    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });

    offers.forEach((offer) => {
      this.markers.push(
          leaflet.marker(offer.coords, {icon: offer.id === activeCard ? activeIcon : defaultIcon}).addTo(this.map));
    });

    if (cityMapClass === CityMapClasses.OFFER_SCREEN) {
      this.markers.push(
          leaflet.marker(clickedOfferCoords, {icon: activeIcon}).addTo(this.map));
    }

    this.map.setView(offers[0].cityCoords, offers[0].mapZoom);
  }
}

CityMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    cityCoords: PropTypes.array.isRequired,
    mapZoom: PropTypes.number.isRequired
  })).isRequired,
  cityMapClass: PropTypes.string.isRequired,
  activeCard: PropTypes.number,
  clickedOfferCoords: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    activeCard: state.APP_PROCESS.activeCard,
    clickedCard: state.APP_PROCESS.clickedCard
  };
};

export {CityMap};
export default connect(mapStateToProps)(CityMap);
