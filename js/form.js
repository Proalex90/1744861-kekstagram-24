import { isEscapeKey } from './utils.js';
import { REGEX, MAX_HASHTAGS, MAX_LENGTH_DESCRIPTION } from './setup.js';
import { checkingStringLength } from './utils.js';

const uploadInput = document.querySelector('#upload-file');
const editeUploadImg = document.querySelector('.img-upload__overlay');
const body = document.body;
const closeButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');


const validityHashtag = () => {
  const hashtags = hashtagInput.value.toLowerCase().split(' ');
  const isDuplicate = hashtags.some((value, id) => hashtags.indexOf(value) !== id);
  if (isDuplicate) {
    hashtagInput.setCustomValidity('Вы ввели одинаковые Хэш-теги!');
  } else if (hashtags.length > MAX_HASHTAGS) {
    hashtagInput.setCustomValidity(
      `Максимальное число Хэш-тегов - ${MAX_HASHTAGS}`);
  } else {
    hashtags.forEach((element) => {
      if (!REGEX.test(element) && hashtagInput.value !== '') {
        hashtagInput.setCustomValidity(
          '- Хэш-тег должен начинаться с символа # (решётка);\n' +
          '- Cтрока после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы(#, @, $ и т.п.), символы пунктуации(тире, дефис, запятая и т.п.), эмодзи и т.д.;\n' +
          '- Хэш-тег не может состоять только из одной решётки;\n' +
          '- Максимальная длина одного хэш-тега 20 символов, включая решётку;');
      } else {
        hashtagInput.setCustomValidity('');
      }
    });
  }
  hashtagInput.reportValidity();
};

const validityDescription = () => {
  if (!checkingStringLength(descriptionInput.value, MAX_LENGTH_DESCRIPTION)) {
    descriptionInput.setCustomValidity(`Максимальная длина сообщения превышает ${MAX_LENGTH_DESCRIPTION} символов. Удалите лишние ${descriptionInput.value.length - MAX_LENGTH_DESCRIPTION} символа(ов).`);
  } else {
    descriptionInput.setCustomValidity('');
  }
  descriptionInput.reportValidity();
};


const closeEditForm = () => {
  editeUploadImg.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeEditForm);
  uploadInput.value = '';
  hashtagInput.value = '';
  descriptionInput.value = '';
  hashtagInput.removeEventListener('input', validityHashtag);
  descriptionInput.removeEventListener('input', validityDescription);
};


const openEditForm = () => {
  editeUploadImg.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', closeEditForm);
  hashtagInput.addEventListener('input', validityHashtag);
  descriptionInput.addEventListener('input', validityDescription);
};

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

descriptionInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
const onKeyDownEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditForm();
  }
};


document.addEventListener('keydown', onKeyDownEsc);

const onUploadImg = () => uploadInput.addEventListener('change', openEditForm);

export { onUploadImg };
