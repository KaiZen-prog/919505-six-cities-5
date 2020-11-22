import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-sreen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import {AppRoute} from "../../const";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainScreen/>
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>

        <PrivateRoute
          exact path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesScreen/>
            );
          }}
        />

        <Route exact path={AppRoute.OFFER_ID}>
          <OfferScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
