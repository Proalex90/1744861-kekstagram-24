// Функция случайного числа из выбрранного диапозона
const getRandomInt = function (from, to) {
  if (to > from) {
    from = Math.abs(Math.ceil(from)); // Все отрицательные числа меняют знак на +... Или тут просто сообщение нужно о том что нужно ввести положительное число?
    to = Math.abs(Math.floor(to));
    return Math.floor(Math.random() * (to - from + 1)) + from; //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
  //если первое число больше второго, числа меняются местами
  const swap = Math.abs(Math.ceil(from));
  from = Math.abs(Math.floor(to));
  to = swap;
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

getRandomInt();

// Функция проверки длины строки
const checkingStringLength = (string, maxStringLength) => string.length <= maxStringLength;

checkingStringLength();
