import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {CityMapSettings} from "../../const";

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
    const {currentCityOffers, activeCard} = this.props;

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

    this.setMap(currentCityOffers, activeCard);
  }

  componentDidUpdate() {
    const {currentCityOffers, activeCard} = this.props;
    this.setMap(currentCityOffers, activeCard);
  }

  render() {
    const {cityMapClass} = this.props;

    return (
      <React.Fragment>
        <section id="map" className={cityMapClass}></section>
      </React.Fragment>
    );
  }

  setMap(currentCityOffers, activeCard) {
    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });

    currentCityOffers.forEach((offer) => {
      this.markers.push(
          leaflet.marker(offer.coords, {icon: offer.id === activeCard ? activeIcon : defaultIcon}).addTo(this.map));
    });

    this.map.setView(CityMapSettings.CITY, CityMapSettings.ZOOM);
  }
}

CityMap.propTypes = {
  currentCityOffers: PropTypes.array.isRequired,
  cityMapClass: PropTypes.string.isRequired,
  activeCard: PropTypes.number
};

const mapStateToProps = ({APP_ACTIONS}) => ({
  currentCityOffers: APP_ACTIONS.currentCityOffers,
  activeCard: APP_ACTIONS.activeCard
});

export {CityMap};
export default connect(mapStateToProps)(CityMap);
