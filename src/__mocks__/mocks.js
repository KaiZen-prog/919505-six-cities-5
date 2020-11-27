export const InitialState = {
  APP_DATA: {
    offers: [],
    favoriteOffers: [],
    isFavoriteOffersLoaded: false,
    offerDetails: {},
    isOfferDetailsLoaded: false,
    nearbyOffers: [],
    isNearbyOffersLoaded: false,
    reviews: [],
    isReviewRequestPosted: false,
    postReviewError: null
  },

  APP_PROCESS: {
    currentCity: `Paris`,
    isOffersSortOpened: false,
    currentOffersSort: `POPULAR`,
    activeCard: null,
    clickedCard: null
  },

  USER: {
    authorizationStatus: `NO_AUTH`,
    data: null
  }
};

export const offers = [{
  city: `Cologne`,
  cityCoords: [50.938361, 6.959974],
  mapZoom: 13,
  coords: [50.957361, 6.9509739999999995],
  detailsMapZoom: 16,
  title: `The house among olive `,
  rating: 3.8,
  type: `house`,
  maxAdults: 3,
  price: 493,
  id: 1,
  bedroomsQuantity: 3,
  features: [
    `Laptop friendly workspace`,
    `Washer`,
    `Towels`,
    `Fridge`,
    `Air conditioning`,
    `Baby seat`,
    `Coffee machine`,
    `Breakfast`
  ],
  poster: `"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg"`,
  photos: [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
  ],
  owner: {
    avatar: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    isPro: true
  },
  isPremium: false,
  isInBookmarks: false,
  description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
},
{
  city: `Brussels`,
  cityCoords: [50.846557, 4.351697],
  mapZoom: 13,
  coords: [50.839557, 4.346697],
  detailsMapZoom: 16,
  title: `Amazing and Extremely Central Flat`,
  rating: 4.3,
  type: `apartment`,
  maxAdults: 3,
  price: 323,
  id: 2,
  bedroomsQuantity: 3,
  features: [
    `Towels`,
    `Baby seat`,
    `Dishwasher`,
    `Washing machine`,
    `Washer`,
    `Coffee machine`,
    `Fridge`
  ],
  poster: `"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg"`,
  photos: [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`
  ],
  owner: {
    avatar: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    isPro: true
  },
  isPremium: false,
  isInBookmarks: false,
  description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
},
{
  city: `Brussels`,
  cityCoords: [50.846557, 4.351697],
  mapZoom: 13,
  coords: [50.865556999999995, 4.371696999999999],
  detailsMapZoom: 16,
  title: `The house among olive `,
  rating: 4.6,
  type: `apartment`,
  maxAdults: 4,
  price: 218,
  id: 3,
  bedroomsQuantity: 4,
  features: [
    `Washer`,
    `Laptop friendly workspace`,
    `Breakfast`,
    `Air conditioning`,
    `Baby seat`
  ],
  poster: `"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg"`,
  photos: [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`
  ],
  owner: {
    avatar: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    isPro: true
  },
  isPremium: false,
  isInBookmarks: false,
  description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
}
];

export const offersFromServer = [{"city": {"name": `Cologne`, "location": {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}}, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`, "images": [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`], "title": `The house among olive `, "is_favorite": false, "is_premium": false, "rating": 3.8, "type": `house`, "bedrooms": 3, "max_adults": 4, "price": 493, "goods": [`Laptop friendly workspace`, `Washer`, `Towels`, `Fridge`, `Air conditioning`, `Baby seat`, `Breakfast`], "host": {"id": 25, "name": `Angelina`, "is_pro": true, "avatar_url": `img/avatar-angelina.jpg`}, "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`, "location": {"latitude": 50.957361, "longitude": 6.9509739999999995, "zoom": 16}, "id": 1}, {"city": {"name": `Brussels`, "location": {"latitude": 50.846557, "longitude": 4.351697, "zoom": 13}}, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`, "images": [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`], "title": `Amazing and Extremely Central Flat`, "is_favorite": false, "is_premium": false, "rating": 4.3, "type": `apartment`, "bedrooms": 3, "max_adults": 8, "price": 323, "goods": [`Towels`, `Baby seat`, `Laptop friendly workspace`, `Dishwasher`, `Washing machine`, `Air conditioning`, `Washer`, `Coffee machine`, `Breakfast`, `Fridge`], "host": {"id": 25, "name": `Angelina`, "is_pro": true, "avatar_url": `img/avatar-angelina.jpg`}, "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`, "location": {"latitude": 50.839557, "longitude": 4.346697, "zoom": 16}, "id": 2}, {"city": {"name": `Brussels`, "location": {"latitude": 50.846557, "longitude": 4.351697, "zoom": 13}}, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`, "images": [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`], "title": `The house among olive `, "is_favorite": false, "is_premium": false, "rating": 4.6, "type": `apartment`, "bedrooms": 4, "max_adults": 7, "price": 218, "goods": [`Washer`, `Laptop friendly workspace`, `Breakfast`, `Air conditioning`, `Baby seat`], "host": {"id": 25, "name": `Angelina`, "is_pro": true, "avatar_url": `img/avatar-angelina.jpg`}, "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`, "location": {"latitude": 50.865556999999995, "longitude": 4.371696999999999, "zoom": 16}, "id": 3}];

export const reviewsFromServer = [{"id": 1, "user": {"id": 1, "is_pro": false, "name": `xyz`, "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`}, "rating": 4, "comment": `12311231123112311231123112311231123112311231123112311231`, "date": `2020-11-18T15:41:58.083Z`}, {"id": 2, "user": {"id": 1, "is_pro": false, "name": `xyz`, "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`}, "rating": 3, "comment": `52525252525252525252525252525252525252525252525252`, "date": `2020-11-19T07:00:10.385Z`}];


export const userData = {
  avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
  email: `qwe@qwe.com`,
  id: 1,
  name: `Some User`,
};

export const reviews = [{
  id: 1,
  author: {
    avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    name: `Paul`,
    isPro: false,
  },
  rating: 4,
  text: `Nice`,
  date: `2020-11-15T13:58:19.494Z`,
},

{
  id: 2,
  author: {
    avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
    name: `John`,
    isPro: true,
  },
  rating: 3,
  text: `Not too good`,
  date: `2020-10-15T13:58:19.494Z`,
}
];

export const userInfoFromServer = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

export const user = {
  "email": `Oliver.conner@gmail.com`,
  "password": `12345678`
};
