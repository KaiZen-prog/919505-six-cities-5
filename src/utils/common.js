export const extend = (a, b) => {
  return Object.assign({}, a, b);
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
