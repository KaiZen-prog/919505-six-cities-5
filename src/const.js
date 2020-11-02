export const RATING_SCALE_MULTIPLIER = 20;

export const Cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

export const SortingTypes = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const OfferCardArticleClasses = {
  MAIN_SCREEN: `cities__place-card place-card`,
  OFFER_SCREEN: `near-places__card place-card`
};

export const OfferCardImgWrapperClasses = {
  MAIN_SCREEN: `cities__image-wrapper place-card__image-wrapper`,
  OFFER_SCREEN: `near-places__image-wrapper place-card__image-wrapper`
};

export const CityMapClasses = {
  MAIN_SCREEN: `cities__map map`,
  OFFER_SCREEN: `property__map map`
};

export const CityMapSettings = {
  CITY: [52.38333, 4.9],
  ZOOM: 12,
  DEFAULT_ICON_URL: `img/pin.svg`,
  ACTIVE_ICON_URL: `img/pin-active.svg`,
  ICON_SIZE: [30, 30]
};
