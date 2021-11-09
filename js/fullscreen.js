import {onKeyDownEscInFullscreenModule } from './utils.js';
import { uploadCommentsListener } from './uploader-comments.js';

const fullscreenPanel = document.querySelector('.big-picture');
const body = document.querySelector('body');
const picturesSection = document.querySelector('.pictures');
const fullscreenCloseButton = document.querySelector('.big-picture__cancel');


const closeFullscreenPanel = () => {
  fullscreenPanel.classList.add('hidden');
  body.classList.remove('modal-open');
  fullscreenCloseButton.removeEventListener('click', closeFullscreenPanel);
  document.removeEventListener('keydown', onKeyDownEscInFullscreenModule);
};


const openFullscreenPanel = () => {
  document.addEventListener('keydown', onKeyDownEscInFullscreenModule);
  fullscreenPanel.classList.remove('hidden');
  body.classList.add('modal-open');
  fullscreenCloseButton.addEventListener('click', closeFullscreenPanel);
};

const getFullscreenTemplate = (element) => {
  openFullscreenPanel();
  fullscreenPanel.querySelector('.big-picture__img').querySelector('img').src = element.url;
  fullscreenPanel.querySelector('.likes-count').textContent = element.likes;
  fullscreenPanel.querySelector('.comments-count').textContent = element.comments.length;

  const socialComments = document.querySelector('.social__comments');
  socialComments.innerHTML = '';
  element.comments.forEach((comment) => {
    const template = `<li class="social__comment hidden">
    <img class="social__picture" src=${comment.avatar} alt="${comment.name}" width="35" height="35">
    <p class="social__text">${comment.message}</p>
    </li>`;
    socialComments.insertAdjacentHTML('beforeend', template);
  });
  uploadCommentsListener(socialComments);
  fullscreenPanel.querySelector('.social__caption').textContent = element.description;
};


const getChoosenPhoto = (array) => (evt) => {
  if (evt.target.closest('.picture')) {
    const currentElement = evt.target.closest('.picture').dataset.id;
    const currentObject = array.find((element) => element.id === parseInt(currentElement, 10));
    getFullscreenTemplate(currentObject);
  }
};

const onPictureClick = (array) => picturesSection.addEventListener('click', getChoosenPhoto(array));

export { onPictureClick, closeFullscreenPanel};
