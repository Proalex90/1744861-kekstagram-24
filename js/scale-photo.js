import { STEP, DEFAULT_SCALE, sizesForChange } from './settings.js';

let stateScale = 100;

const imgScaleFieldset = document.querySelector('.img-upload__scale');
const scalePlus = imgScaleFieldset.querySelector('.scale__control--bigger');
const scaleMinus = imgScaleFieldset.querySelector('.scale__control--smaller');
const scaleValue = imgScaleFieldset.querySelector('.scale__control--value');
const uploadDivImg = document.querySelector('.img-upload__preview');

const setScaleValue = (scale) => scaleValue.value = `${scale}%`;
const setScaleImg = (scale) => uploadDivImg.style.transform = `scale(${scale / 100})`;

const setDefaultImgScale = () => {
  stateScale = DEFAULT_SCALE;
  setScaleValue(stateScale);
  setScaleImg(stateScale);
};

const changeScaleValue = (sign) => {
  stateScale += (sign * STEP);
  setScaleValue(stateScale);
};

const changeImgSize = () => {
  setDefaultImgScale();
  scaleMinus.addEventListener('click', () => {
    if (stateScale > sizesForChange.min) {
      changeScaleValue(-1);
      setScaleImg(stateScale);
    }
  });

  scalePlus.addEventListener('click', () => {
    if (stateScale <= sizesForChange.max) {
      changeScaleValue(1);
      setScaleImg(stateScale);
    }
  });
};

export { changeImgSize };
