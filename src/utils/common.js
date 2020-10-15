export const getRandomBool = () => Math.random() < 0.5;
export const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];
export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getRandomSet = (items, num) => [...new Set(items.sort(getRandomBool).slice(0, num))];

export const addSpaceToStrings = (strings) => {
  for (let i = 1; i < strings.length; i++) {
    strings[i] = ` ` + strings[i];
  }

  return strings;
};

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

export const getRandomDate = (from, to) => new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
