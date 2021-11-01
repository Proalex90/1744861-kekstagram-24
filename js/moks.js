import { NAMES, COMMENTS } from './data.js';
import { getRandomInt, getRandomArrayElement } from './utils.js';
import { NUMBER_COMMENTS } from './setup.js';


//Функция случайного 1-2 комментариев -
const getTextComments = () => {
  let text = '';
  for (let i = 1; i <= getRandomInt(1, 2); i++) {
    text += getRandomArrayElement(COMMENTS);
  }
  return text;
};

//Функция генерации комментария -
const getComments = (j) => {
  j++;
  return {
    id: j,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getTextComments(),
    name: getRandomArrayElement(NAMES),
  };
};

//Основная функция получения описания к фото
const createDescription = (i) => {
  i++;
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: 'Какое-то описание',
    likes: getRandomInt(15, 200),
    comments: Array.from({ length: getRandomInt(NUMBER_COMMENTS.min, NUMBER_COMMENTS.max) }, (item, j) => getComments(j)),
  };
};

export { getComments, createDescription };
