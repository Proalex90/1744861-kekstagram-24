//Количество комментариев
const NUMBER_COMMENTS = {
  min: 0,
  max: 16,
};

//Регулярное выражение
const REGEX = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

//Максимальное число Хэш-тегов
const MAX_HASHTAGS = 5;

//Максимальная длина описания фото
const MAX_LENGTH_DESCRIPTION = 140;

//Найстройки количества комментариев на странице
const COMMENTS_COUNT_PLUS = 5;
const COMMENTS_COUNT_START = 5;

//Модуль изменения масштаба
const STEP = 25;
const DEFAULT_SCALE = 100;
const sizesForChange = {
  min: 25,
  max: 75,
};

export { NUMBER_COMMENTS, REGEX, MAX_HASHTAGS, MAX_LENGTH_DESCRIPTION, COMMENTS_COUNT_PLUS, COMMENTS_COUNT_START, STEP, DEFAULT_SCALE, sizesForChange };
