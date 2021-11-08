const fetchList = {
  get: 'https://24.javascript.pages.academy/kekstagram/data',
  post: 'https://24.javascript.pages.academy/kekstagram',
};

const getData = () => (
  fetch(fetchList.get)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
);

const sendData = (onSuccess, onFail, body) => {
  fetch(fetchList.post,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
