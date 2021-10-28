import { isEscapeKey } from './util.js';

const fullscreenPanel = document.querySelector('.big-picture');
const body = document.querySelector('body');
const picturesSection = document.querySelector('.pictures');
const fullscreenCloseButton = document.querySelector('.big-picture__cancel');

const commentCount = document.querySelector('.social__comment-count');
const commentsLoadButton = document.querySelector('.comments-loader');

const onKeyDownEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullscreenPanel();
  }
};

const closeFullscreenPanel = () => {
  fullscreenPanel.classList.add('hidden');
  body.classList.remove('modal-open');
  fullscreenCloseButton.removeEventListener('click', closeFullscreenPanel);
  document.removeEventListener('keydown', onKeyDownEsc);
};


const openFullscreenPanel = () => {
  fullscreenPanel.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoadButton.classList.add('hidden');
  fullscreenCloseButton.addEventListener('click', closeFullscreenPanel);
  document.addEventListener('keydown', onKeyDownEsc);
};

const getFullscreenTemplate = (element) => {
  openFullscreenPanel();
  fullscreenPanel.querySelector('.big-picture__img').querySelector('img').src = element.url;
  fullscreenPanel.querySelector('.likes-count').textContent = element.likes;
  fullscreenPanel.querySelector('.comments-count').textContent = element.comments.length;

  const socialComments = document.querySelector('.social__comments');
  socialComments.innerHTML = '';
  element.comments.forEach((comment) => {
    const template = `<li class="social__comment">
    <img class="social__picture" src=${comment.avatar} alt="${comment.name}" width="35" height="35">
    <p class="social__text">${comment.message}</p>
    </li>`;
    socialComments.insertAdjacentHTML('beforeend', template);
  });
  fullscreenPanel.querySelector('.social__caption').textContent = element.description;
};


function getChoosenPhoto(array) {
  return function onPhotoClick(evt) {
    if (evt.target.closest('.picture')) {
      const currentElement = evt.target.closest('.picture');
      const currentObject = (currentElement.dataset.id) - 1;
      getFullscreenTemplate(array[currentObject]);
    }
  };
}

const onPictureClick = (array) => picturesSection.addEventListener('click', getChoosenPhoto(array));

export { onPictureClick };