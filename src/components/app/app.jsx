import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-sreen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offers={offers}
          />
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
          exact path="/offer/:id"
          render={({match}) => {
            return (
              <OfferScreen
                offer={offers.find((offer) => offer.id === String(match.params.id))}
              />
            );
          }}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
