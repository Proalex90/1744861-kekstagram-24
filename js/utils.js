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


function onClickCloseOutsideElement(block, elem) { // вызвать в момент показа окна, где elem - окно
  function outsideClickListener(event) {
    if (!elem.contains(event.target)) {  // проверяем, что клик не по элементу и элемент виден
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



//Экран загрузки изображения
const onLoadImg = () => {
  const loadMessage = document.querySelector('#messages').content.querySelector('.img-upload__message');
  const body = document.body;
  body.append(loadMessage);

}


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


export { checkingStringLength, isEscapeKey, isEnterKey, showAlert, onSuccessMessage, onFailMessage, onLoadImg };
