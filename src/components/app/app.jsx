import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';

import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-sreen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = ({offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen/>
        </Route>

        <Route exact path="/login">
          <LoginScreen />
        </Route>

        <Route
          exact path="/favorites"
          render={({history}) => (
            <FavoritesScreen
              onLogoClick = {() => history.push(`/`)}
            />
          )}>
        </Route>

        <Route
          exact path="/offer/:id?"
          render={({match, history}) => {

            return (
              <OfferScreen
                offers={offers}
                offer={offers.find((offer) => offer.id === String(match.params.id))}
                onOfferCardClick={(currentOffer) =>
                  history.push(`/offer/${currentOffer.id}`)}
              />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.currentCityOffers,
});


export {App};
export default connect(mapStateToProps)(App);
