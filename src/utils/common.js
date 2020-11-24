export const extend = (a, b) => {
  return Object.assign({}, a, b);
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

export const adaptOfferCardToApp = (offer) => {
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
  };
};

export const adaptOfferDetailsToApp = (offer) => {
  return {
    id: offer.id,
    photos: offer.images,
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

export const sortReviewsByDate = (reviews) => {
  return reviews.slice().sort((left, right) => {
    return (new Date(right.date) - new Date(left.date));
  });
};
