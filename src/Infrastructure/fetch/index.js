import axios from 'axios';

export const customFetch = (url, callback) => {
  axios
    .get(url)
    .then(res => callback(res.data))
    .catch(err => {
      throw new Error(`PrepMe Error -- fetch error
        ${err.message}`);
    });
};
