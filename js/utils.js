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


//Нажатие ESC -
const isEscapeKey = (evt) => evt.key === 'Escape';

//Нажатие Enter
const isEnterKey = (evt) => evt.key === 'Enter';

export { checkingStringLength, getRandomArrayElement, getRandomInt, isEscapeKey, isEnterKey };
