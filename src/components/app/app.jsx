import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {offersQuantity} = props;

  return (
    <MainPage offersQuantity={offersQuantity} />
  );
};

App.propTypes = {
  offersQuantity: PropTypes.number.isRequired,
};

export default App;
