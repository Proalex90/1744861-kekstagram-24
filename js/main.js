
import { getPreviewPhoto } from './preview.js';
import { onPictureClick } from './fullscreen.js';
import { onUploadImg } from './form.js';
import { createDescription } from './mocks.js';
import { createLoader } from './load.js';

createLoader(getPreviewPhoto);
const arrayObjects = Array.from({ length: 25 }, (item, i) => createDescription(i));
getPreviewPhoto();
onPictureClick(arrayObjects);
onUploadImg();


export { arrayObjects };
