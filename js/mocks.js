import { getRandomArrayElement } from './utils.js';
import { NUMBER_COMMENTS } from './setup.js';

// Массив имен
const NAMES = ['Казимир', 'Карл', 'Карен', 'Клавдий', 'Кирилл', 'Клим', 'Ким', 'Клод', 'Клемент', 'Корнилий', 'Корней', 'Конрад', 'Конкордий', 'Константин', 'Кондрат', 'Ксаннф', 'Кузьма'];

//Массив комментариев
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];


// Функция случайного числа из выбрранного диапозона -
const getRandomInt = function (from, to) {
  if (to > from) {
    from = Math.abs(Math.ceil(from));
    to = Math.abs(Math.floor(to));
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
  //если первое число больше второго, числа меняются местами
  const swap = Math.abs(Math.ceil(from));
  from = Math.abs(Math.floor(to));
  to = swap;
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

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

export { getComments, createDescription, getRandomInt };
