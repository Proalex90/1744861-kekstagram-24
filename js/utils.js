// Функция проверки длины строки
const checkingStringLength = (string, maxStringLength) => string.length <= maxStringLength;


//Нажатие ESC -
const isEscapeKey = (evt) => evt.key === 'Escape';

//Нажатие Enter
const isEnterKey = (evt) => evt.key === 'Enter';

//Окно успешной отправки
const body = document.body;
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');


const onSuccessMessage = () => {
  const successButton = successMessage.querySelector('.success__button');
  const successInnerBlock = successMessage.querySelector('.success__inner');

  body.append(successMessage);

  const closedSuccessMessage = () => {
    successMessage.remove();
  };
  onClickCloseOutsideElement(successMessage, successInnerBlock);
  successButton.onclick = closedSuccessMessage;
  body.onkeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closedSuccessMessage();
    }
  };
};


function onClickCloseOutsideElement(block, elem) {
  function outsideClickListener(event) {
    if (!elem.contains(event.target)) {
      block.remove();
      document.removeEventListener('click', outsideClickListener);
    }
  }
  document.addEventListener('click', outsideClickListener);
}


//Окно неудачной отправки формы
const onFailMessage = () => {
  const errorButton = errorMessage.querySelector('.error__button');
  const errorInnerBlock = errorMessage.querySelector('.error__inner');
  body.append(errorMessage);

  const closedFailMessage = () => {
    errorMessage.remove();
  };
  onClickCloseOutsideElement(errorMessage, errorInnerBlock);
  errorButton.onclick = closedFailMessage;
  body.onkeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closedFailMessage();
    }
  };
};


//Окно предупреждения
const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

//Генератор случайного числа
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

//Случайный массив фотографий
const COUNT_RANDOM_PHOTO = 10;

const getRandomArray = (array) => {
  const numbersArr = [];
  while (numbersArr.length < COUNT_RANDOM_PHOTO) {
    const ranNum = getRandomInt(0, array.length - 1);
    if (!numbersArr.length || numbersArr.every((num) => num !== ranNum)) {
      numbersArr.push(ranNum);
    }
  }
  return numbersArr.map((num) => array[num]);
};

//Таймер
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { checkingStringLength, isEscapeKey, isEnterKey, showAlert, onSuccessMessage, onFailMessage, getRandomArray, debounce };
