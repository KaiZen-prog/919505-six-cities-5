import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const MainEmpty = (props) => {
  const {
    currentCity
  } = props;

  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </>
  );
};

MainEmpty.propTypes = {
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = ({APP_PROCESS}) => ({
  currentCity: APP_PROCESS.currentCity,
});

export {MainEmpty};
export default connect(mapStateToProps)(MainEmpty);
