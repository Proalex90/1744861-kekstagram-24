import { NAMES, COMMENTS } from './data.js';


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

//Функция получения случайного элемента из массива -
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

// Функция проверки длины строки
const checkingStringLength = (string, maxStringLength) => string.length <= maxStringLength;

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

//Нажатие ESC -
const isEscapeKey = (evt) => evt.key === 'Escape';

//Нажатие Enter
const isEnterKey = (evt) => evt.key === 'Enter';

export { getComments, checkingStringLength, getRandomArrayElement, getRandomInt, isEscapeKey, isEnterKey };
