const STEP = 25;
const DEFAULT_SCALE = 100;
const sizesForChange = {
  min: 25,
  max: 76,
};

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

  scaleMinus.onclick = () => {
    if (stateScale > sizesForChange.min) {
      changeScaleValue(-1);
      setScaleImg(stateScale);
    }
  };

  scalePlus.onclick = () => {
    if (stateScale <= sizesForChange.max) {
      changeScaleValue(1);
      setScaleImg(stateScale);
    }
  };
};

export { changeImgSize };
