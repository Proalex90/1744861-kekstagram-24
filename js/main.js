import { getComments, getRandomInt } from './utils.js';
import { numberComments } from './data.js';
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
    comments: Array.from({ length: getRandomInt(numberComments.min, numberComments.max) }, (item, j) => getComments(j)),
  };
};

const arrayObjects = Array.from({ length: 25 }, (item, i) => createDescription(i));

getPreviewPhoto();
onPictureClick(arrayObjects);
onUploadImg();

export { arrayObjects };
