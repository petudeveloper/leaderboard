/* eslint-disable import/no-cycle */
import renderScores from './dom-handler';

const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LMXYZnWz9iXxoiT9U5dE/scores/';

export const addScore = async (name, score) => {
  fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result);
};

export const getScores = () => {
  fetch(requestURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result)
    .then((data) => renderScores(data));
};