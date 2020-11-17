import {SortingTypes} from "../const";

export const getRandomBool = () => Math.random() < 0.5;
export const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];
export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const createRandomArray = (array) => {
  const newArray = [];
  const newArrayLength = getRandomNumber(0, array.length);
  for (let i = 0; i < newArrayLength; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCurrentCityOffers = (offers, city) => {
  return offers.filter((offer) => offer.city === city);
};

export const getSortedOffers = (offers, type) => {
  switch (type) {
    case SortingTypes.LOW_TO_HIGH:
      return [...offers].sort((a, b) => (a.price - b.price));

    case SortingTypes.HIGH_TO_LOW:
      return [...offers].sort((a, b) => (b.price - a.price));

    case SortingTypes.TOP_RATED_FIRST:
      return [...offers].sort((a, b) => (b.rating - a.rating));

    default:
      return offers;
  }
};

export const adaptOfferToApp = (offer) => {
  return {
    id: offer.id,
    city: offer.city.name,
    title: offer.title,
    poster: offer.preview_image,
    photos: offer.images,
    type: offer.type,
    price: offer.price,
    rating: offer.rating,
    bedroomsQuantity: offer.bedrooms,
    maxAdults: offer.max_adults,
    features: offer.goods,
    description: offer.description,
    isPremium: offer.is_premium,
    owner: {
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      isPro: offer.host.is_pro,
      id: offer.host.id,
    },
    cityCoords: [offer.city.location.latitude, offer.city.location.longitude],
    coords: [offer.location.latitude, offer.location.longitude],
    mapZoom: offer.city.location.zoom,
    detailsMapZoom: offer.location.zoom,
    isInBookmarks: offer.is_favorite,
  };
};

export const adaptReviewToApp = (comment) => {
  return {
    id: comment.id,
    author: {
      avatar: comment.user.avatar_url,
      name: comment.user.name,
      isPro: comment.user.is_pro
    },
    rating: comment.rating,
    text: comment.comment,
    date: comment.date,
  };
};
