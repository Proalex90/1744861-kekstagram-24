import { effectOptions } from './settings.js';

const tamplateEffect = 'effects__preview--';
const defaultStyleImg = 'effects__preview--none';
const defaultEffectId = 'effect-none';


const uploadImg = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const effectsContainer = document.querySelector('.img-upload__effects');
const effectLevelValue = document.querySelector('.effect-level__value');

let startEffect = 'none';

const setClassToLoadImg = (className) => uploadImg.className = className; //прописываем нужный класс

//Начальные настройки слайдера
noUiSlider.create(slider, {
  start: 1,
  step: 0.1,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1,
  },
});

// событие перемещения ползунка насыщенеости в зависимости от выбранного фильтра
slider.noUiSlider.on('update', (___, handle, values) => {
  const style = effectOptions[startEffect].style;
  effectLevelValue.value = values[handle]; //Записываем силу эффекта в скрытое поле для отправки на сервер

  switch (startEffect) {
    case 'chrome':
    case 'sepia':
    case 'heat':
      uploadImg.style.filter = `${style}(${values[handle]})`; break; //Группирую т.к настройки одинаковые
    case 'marvin':
      uploadImg.style.filter = `${style}(${values[handle]}%)`; break;
    case 'phobos':
      uploadImg.style.filter = `${style}(${values[handle]}px)`; break;
    default:
      uploadImg.style.filter = '';
      effectLevelValue.value = '';
  }
});

// Сбрасываю все эффекты и прячу слайдер
const setDefaultEffect = () => {
  setClassToLoadImg(defaultStyleImg);
  const inputs = effectsContainer.querySelectorAll('input');
  inputs.forEach((input) => input.checked = input.id === defaultEffectId);
  uploadImg.style.filter = '';
  effectLevelValue.value = '';
  sliderContainer.style.display = 'none';
};

// Переключение между фильтрами
const changeEffect = (target) => {
  sliderContainer.style.display = target.value === 'none' ? 'none' : ''; //Прячу слайдер если выбрано без эффектов
  const effect = target.value; // Получаю эффект из выбранного фильтра
  setClassToLoadImg(tamplateEffect + effect);
  startEffect = effect;
  const { min, max, step } = effectOptions[effect]; //Обновляю настройки слайдера в зависимости от выбранного эффекта
  slider.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    step,
    start: max,
  });
};


effectsContainer.addEventListener('change', (evt) => changeEffect(evt.target));

export { setDefaultEffect };
