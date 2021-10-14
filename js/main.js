import { getComments, getRandomInt } from './util.js';
import { numberComments } from './data.js';


//Основная функция получения описания к фото
const createDescription = (i) => {
  i++;
  return {
    idDescription: i,
    url: `photos/${i}.jpg`,
    description: 'Какое-то описание',
    likes: getRandomInt(15, 200),
    comments: Array.from({ length: getRandomInt(numberComments.min, numberComments.max) }, (item, j) => getComments(j)),
  };
};

const arrayObject = Array.from({ length: 25 }, (item, i) => createDescription(i));

arrayObject;
