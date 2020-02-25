import axios from 'axios';

export const customFetch = (url, callback, onError) => {
  axios
    .get(url)
    .then(res => callback(res.data))
    .catch(err => {
      onError({
        message: 'Error fetching content.',
        detail: err.message,
      });
    });
};
