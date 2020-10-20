import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import getOffers from "./mocks/offers";

const offers = getOffers();

ReactDOM.render(
    <App
      offers={offers}
    />,
    document.querySelector(`#root`)
);
