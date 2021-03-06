//Регулярное выражение
const REGEX = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

//Максимальное число Хэш-тегов
const MAX_HASHTAGS = 5;

//Максимальная длина описания фото
const MAX_LENGTH_DESCRIPTION = 140;

//Найстройки количества комментариев на странице
const COMMENTS_COUNT_PLUS = 5;
const COMMENTS_COUNT_START = 5;

// Настройки для слайдера в зависимости от эффекта
const EffectOptions = {
  'none': { style: 'none', min: 0, max: 1, step: 1 },
  'chrome': { style: 'grayscale', min: 0, max: 1, step: 0.1 },
  'sepia': { style: 'sepia', min: 0, max: 1, step: 0.1 },
  'marvin': { style: 'invert', min: 0, max: 100, step: 1 },
  'phobos': { style: 'blur', min: 0, max: 3, step: 0.1 },
  'heat': { style: 'brightness', min: 1, max: 3, step: 0.1 },
};


export { REGEX, MAX_HASHTAGS, MAX_LENGTH_DESCRIPTION, COMMENTS_COUNT_PLUS, COMMENTS_COUNT_START, EffectOptions };
