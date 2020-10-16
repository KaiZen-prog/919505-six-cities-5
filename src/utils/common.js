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
