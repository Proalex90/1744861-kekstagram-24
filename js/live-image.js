import { uploadInput } from './form.js';
import { uploadImg, effectsPreview } from './slider.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const showChosenImg = () => {
  uploadInput.addEventListener('change', () => {
    const file = uploadInput.files[0];
    if (file && FILE_TYPES.some((fileType) => file.name.toLowerCase().endsWith(fileType))) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {uploadImg.src = reader.result;});
      reader.addEventListener('load', () => effectsPreview.forEach((element) => {
        element.style.backgroundImage = `url(${reader.result})`;
      }));
      reader.readAsDataURL(file);
    }
  });
};

export { showChosenImg };
