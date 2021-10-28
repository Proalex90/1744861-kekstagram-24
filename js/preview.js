import { arrayObjects } from './main.js';

const getPreviewPhoto = function () {
  const templateFragment = document.querySelector('#picture').content;
  const template = templateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  const BLOCK_PICTURE = document.querySelector('.pictures');

  arrayObjects.forEach((element) => {
    const cloneElement = template.cloneNode(true);
    cloneElement.setAttribute('data-id', element.id);
    cloneElement.querySelector('.picture__img').src = element.url;
    cloneElement.querySelector('.picture__likes').textContent = element.likes;
    cloneElement.querySelector('.picture__comments').textContent = element.comments.length;
    fragment.appendChild(cloneElement);

  });
  BLOCK_PICTURE.appendChild(fragment);
};


export { getPreviewPhoto };
