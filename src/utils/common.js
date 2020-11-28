import {ReviewCount} from "../const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const findIndex = (array, item) => {
  return array.findIndex((it) => it.id === item.id);
};

export const replaceItem = (array, item) => {
  const itemIndex = findIndex(array, item);
  return [
    ...array.slice(0, itemIndex),
    item,
    ...array.slice(itemIndex + 1)
  ];
};

export const removeItem = (array, item) => {
  const itemIndex = findIndex(array, item);
  return [
    ...array.slice(0, itemIndex),
    ...array.slice(itemIndex + 1)
  ];
};

export const adaptUserToApp = (data) => {
  return {
    avatarUrl: data.avatar_url,
    email: data.email,
    id: data.id,
    isPro: data.is_pro,
    name: data.name
  };
};

export const adaptOfferToApp = (offer) => {
  return {
    id: offer.id,
    isPremium: offer.is_premium,
    poster: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
    isInBookmarks: offer.is_favorite,
    city: offer.city.name,
    cityCoords: [offer.city.location.latitude, offer.city.location.longitude],
    coords: [offer.location.latitude, offer.location.longitude],
    mapZoom: offer.city.location.zoom,
    detailsMapZoom: offer.location.zoom,

    photos: offer.images,
    bedroomsQuantity: offer.bedrooms,
    maxAdults: offer.max_adults,
    features: offer.goods,
    description: offer.description,

    owner: {
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      isPro: offer.host.is_pro,
      id: offer.host.id,
    },
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

export const adaptReviewToServer = (review, rating) => {
  return {
    comment: review,
    rating
  };
};

export const formatReviewsArray = (reviews) => {
  return reviews.slice().sort((left, right) => {
    return (new Date(right.date) - new Date(left.date));
  }).slice(ReviewCount.MIN, ReviewCount.MAX);
};
