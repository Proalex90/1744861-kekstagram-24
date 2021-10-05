// Функция случайного числа из выбрранного диапозона
const getRandomInt = function (from, to) {
  if (to > from) {
    from = Math.abs(Math.ceil(from));
    to = Math.abs(Math.floor(to));
    return Math.floor(Math.random() * (to - from + 1)) + from; //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
  //если первое число больше второго, числа меняются местами
  const swap = Math.abs(Math.ceil(from));
  from = Math.abs(Math.floor(to));
  to = swap;
  return Math.floor(Math.random() * (to - from + 1)) + from;
};


// Функция проверки длины строки
const checkingStringLength = (string, maxStringLength) => string.length <= maxStringLength;
const numberComments = {
  min: 0,
  max: 5,
};



// Массив имен
const names = ['Казимир', 'Карл', 'Карен', 'Клавдий', 'Кирилл', 'Клим', 'Ким', 'Клод', 'Клемент', 'Корнилий', 'Корней', 'Конрад', 'Конкордий', 'Константин', 'Кондрат', 'Ксаннф', 'Кузьма'];
//Массив комментариев
const comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

//Функция получения случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];


//Функция генерации комментария
const getComments = (j) => {
  j++;
  return {
    id: j,
    avatar: `img/avatar${getRandomInt(1, 6)}.svg`,
    message: getRandomArrayElement(comments),
    name: getRandomArrayElement(names),
  };
};

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

