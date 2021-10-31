import { COMMENTS_COUNT_START, COMMENTS_COUNT_PLUS } from './setup.js';


const uploadCommentsListener = (commentsList) => {
  const uploadButton = document.querySelector('.comments-loader');
  const nowCommentsCountSpan = document.querySelector('.comment-count-now');
  let commentsNow = COMMENTS_COUNT_START;
  const comments = Array.from(commentsList.querySelectorAll('.social__comment'));
  const showSomeComments = (array, num) => {
    let showCount;
    if (array.length > num) {
      showCount = num;
      uploadButton.classList.remove('hidden');
    } else {
      showCount = array.length;
      uploadButton.classList.add('hidden');
    }
    const needComments = array.slice(0, showCount);
    needComments.forEach((item) => item.classList.remove('hidden'));
    nowCommentsCountSpan.textContent = showCount;
  };

  showSomeComments(comments, commentsNow);

  uploadButton.addEventListener('click', () => {
    commentsNow += COMMENTS_COUNT_PLUS;
    showSomeComments(comments, commentsNow);
  });
};

export { uploadCommentsListener };
