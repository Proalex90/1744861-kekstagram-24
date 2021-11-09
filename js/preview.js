import { onPictureClick } from './fullscreen.js';
const getPreviewPhoto = (arrayObjects) => {
  const templateFragment = document.querySelector('#picture').content;
  const template = templateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  const blockPictures = document.querySelector('.pictures');

  arrayObjects.forEach((element) => {
    const cloneElement = template.cloneNode(true);
    cloneElement.setAttribute('data-id', element.id);
    cloneElement.querySelector('.picture__img').src = element.url;
    cloneElement.querySelector('.picture__likes').textContent = element.likes;
    cloneElement.querySelector('.picture__comments').textContent = element.comments.length;
    fragment.appendChild(cloneElement);

  });
  blockPictures.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
  blockPictures.appendChild(fragment);
  onPictureClick(arrayObjects);
};


export { getPreviewPhoto };
