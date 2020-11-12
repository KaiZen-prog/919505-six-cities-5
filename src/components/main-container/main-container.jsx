import React from "react";
import PropTypes from "prop-types";
import {CitiesContainersClasses, CityMapClasses, OfferCardArticleClasses, OfferCardImgWrapperClasses} from "../../const";
import CitiesHeader from "../cities-header/cities-header";
import OffersSort from "../offers-sort/offers-sort";
import OfferList from "../offer-list/offer-list";
import CityMap from "../city-map/city-map";
import MainEmpty from "../main-empty/main-empty";

const MainContainer = ({withOffers}) => {
  return (
    <>
      <div className="cities">
        {withOffers
          ? <div className={CitiesContainersClasses.CONTAINER.WITH_OFFERS}>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <CitiesHeader/>
              <OffersSort/>
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerCardArticleClass={OfferCardArticleClasses.MAIN_SCREEN}
                  offerCardImgWrapperClass={OfferCardImgWrapperClasses.MAIN_SCREEN}
                />
              </div>
            </section>

            <div className="cities__right-section">
              <CityMap
                cityMapClass = {CityMapClasses.MAIN_SCREEN}
              />
            </div>
          </div>

          : <div className={CitiesContainersClasses.CONTAINER.NO_OFFERS}>
            <MainEmpty/>
          </div>
        }
      </div>
    </>
  );
};

MainContainer.propTypes = {
  withOffers: PropTypes.bool.isRequired
};

export default MainContainer;
