import { getComments, getRandomInt } from './utils.js';
import { NUMBER_COMMENTS } from './setup.js';
import { getPreviewPhoto } from './preview.js';
import { onPictureClick } from './fullscreen.js';
import { onUploadImg } from './form.js';

//Основная функция получения описания к фото
const createDescription = (i) => {
  i++;
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: 'Какое-то описание',
    likes: getRandomInt(15, 200),
    comments: Array.from({ length: getRandomInt(NUMBER_COMMENTS.min, NUMBER_COMMENTS.max) }, (item, j) => getComments(j)),
  };
};

const arrayObjects = Array.from({ length: 25 }, (item, i) => createDescription(i));

getPreviewPhoto();
onPictureClick(arrayObjects);
onUploadImg();

export { arrayObjects };
