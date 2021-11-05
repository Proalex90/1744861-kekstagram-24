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
  max: 76,
};

//Модуль слайдера...

// Настройки для слайдера в зависимости от эффекта
const effectOptions = {
  'none': { style: 'none', min: 0, max: 1, step: 1 },
  'chrome': { style: 'grayscale', min: 0, max: 1, step: 0.1 },
  'sepia': { style: 'sepia', min: 0, max: 1, step: 0.1 },
  'marvin': { style: 'invert', min: 0, max: 100, step: 1 },
  'phobos': { style: 'blur', min: 0, max: 3, step: 0.1 },
  'heat': { style: 'brightness', min: 1, max: 3, step: 0.1 },
};


export { REGEX, MAX_HASHTAGS, MAX_LENGTH_DESCRIPTION, COMMENTS_COUNT_PLUS, COMMENTS_COUNT_START, STEP, DEFAULT_SCALE, sizesForChange, effectOptions };
