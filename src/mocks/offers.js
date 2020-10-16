import {nanoid} from "nanoid";
import moment from "moment";

import {
  getRandomArrayElement,
  getRandomBool,
  getRandomInteger,
  createRandomArray
} from "../utils/common.js";

const OFFERS_QUANTITY = 4;

const TITLES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const USERS = [
  {
    avatar: `avatar-angelina.jpg`,
    name: `Angelina`
  },

  {
    avatar: `avatar-max.jpg`,
    name: `Max`
  }
];

const POSTERS = [
  `apartment-01.jpg`,
  `apartment-02.jpg`,
  `apartment-03.jpg`,
  `studio-01.jpg`,
  `room.jpg`
];

const APARTMENT_TYPES = [
  `Apartment`,
  `Private room`
];

const PRICES = {
  MIN: 10,
  MAX: 500
};

const RATING_SCALE = {
  MIN: 0,
  MAX: 50
};

const BEDROOMS = {
  MIN: 1,
  MAX: 5
};

const MAX_ADULTS = {
  MIN: 1,
  MAX: 5
};

const FEATURES = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cable TV`,
  `Fridge`,
];

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateReview = () => ({
  author: getRandomArrayElement(USERS),
  rating: getRandomInteger(RATING_SCALE.MIN, RATING_SCALE.MAX) / 10,
  text: DESCRIPTION.split(`.`, getRandomInteger(1, 5)).toString(),
  date: moment(Date.now() - getRandomInteger(0, 5 * 12 * 30 * 24 * 60 * 60 * 1000)).format(`YYYY-MM-DD`),
});

const getReviews = (num) => Array.from({length: num}, generateReview);

const generateOffer = () => ({
  id: nanoid(),
  title: getRandomArrayElement(TITLES),
  poster: getRandomArrayElement(POSTERS),
  photos: createRandomArray(POSTERS),
  type: getRandomArrayElement(APARTMENT_TYPES),
  price: getRandomInteger(PRICES.MIN, PRICES.MAX),
  rating: getRandomInteger(RATING_SCALE.MIN, RATING_SCALE.MAX) / 10,
  bedroomsQuantity: getRandomInteger(BEDROOMS.MIN, BEDROOMS.MAX),
  maxAdults: getRandomInteger(MAX_ADULTS.MIN, MAX_ADULTS.MAX),
  features: createRandomArray(FEATURES),
  description: DESCRIPTION.split(`.`, getRandomInteger(1, 5)).toString(),
  isPremium: getRandomBool(),
  owner: getRandomArrayElement(USERS),
  reviews: getReviews(getRandomInteger(0, 5)),
  isInBookmarks: getRandomBool()
});

const getOffers = () => {
  const offers = [];
  for (let i = 0; i < OFFERS_QUANTITY; i++) {
    let newOffer = generateOffer();
    offers.push(newOffer);
  }

  return offers;
};

export default getOffers;
