import { getData } from './api.js';
import { getPreviewPhoto } from './preview.js';
import { showAlert, getRandomArray, debounce } from './utils.js';

const ACTIVE_FILTER_CLASS = 'img-filters__button--active';
const INACTIVE_FILTERS_CLASS = 'img-filters--inactive';

const targetIds = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const filtersForm = document.querySelector('.img-filters__form');
const imgFilters = document.querySelector('.img-filters');
const filterButton = imgFilters.querySelectorAll('.img-filters__button');

const showFilter = () => {
  // Массив картинок для загрузки
  const images = Array.from(document.images).filter((img) => img.classList.contains('picture__img'));

  // счетчик уже загруженных
  let counter = 0;
  const onLoadImgCounter = () => {
    counter++;
    if (counter === images.length) {
      imgFilters.classList.remove(INACTIVE_FILTERS_CLASS);
    }
  };
  images.forEach((img) => img.addEventListener('load', onLoadImgCounter));
};

const countComment = (photo) => photo.comments.length;
const sortByComment = (array) => array.sort((photo1, photo2) => countComment(photo2) - countComment(photo1));

const defaultOption = (res) => res;
const getOptionalFilterData = (selectedFilter = defaultOption) => {

  getData()
    .then(selectedFilter)
    .then(getPreviewPhoto)
    .then(showFilter)
    .catch(showAlert);

};

const changeFilter = (evt) => {
  switch (evt.target.id) {
    case targetIds.default:
      getOptionalFilterData(); break;
    case targetIds.random:
      getOptionalFilterData(getRandomArray); break;
    case targetIds.discussed:
      getOptionalFilterData(sortByComment); break;
  }
};


const changeMarkerFilter = (evt) => {
  filterButton.forEach((btnIn) => btnIn.classList.remove(ACTIVE_FILTER_CLASS));
  evt.target.classList.add(ACTIVE_FILTER_CLASS);
};

const filter = () => {
  filtersForm.addEventListener('click', debounce((evt) => {
    changeFilter(evt);
    changeMarkerFilter(evt);
  }));
};

export { filter, changeFilter, showFilter, getOptionalFilterData };
