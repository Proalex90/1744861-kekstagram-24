
import { getPreviewPhoto } from './preview.js';
import { onPictureClick } from './fullscreen.js';
import { onUploadImg } from './form.js';
import { getData } from './api.js';
import {showAlert} from './utils.js';


const start = getData((arrayObjects) => {
  getPreviewPhoto(arrayObjects);
  onPictureClick(arrayObjects);
  onUploadImg();
}, showAlert);
start();

