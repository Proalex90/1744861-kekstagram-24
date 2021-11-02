import { getRandomInt } from './mocks.js';

//Функция получения случайного элемента из массива -
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

// Функция проверки длины строки
const checkingStringLength = (string, maxStringLength) => string.length <= maxStringLength;


//Нажатие ESC -
const isEscapeKey = (evt) => evt.key === 'Escape';

//Нажатие Enter
const isEnterKey = (evt) => evt.key === 'Enter';

export { checkingStringLength, getRandomArrayElement, isEscapeKey, isEnterKey };
