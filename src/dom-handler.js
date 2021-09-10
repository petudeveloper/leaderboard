/* eslint-disable import/no-cycle */
import { getScores, addScore } from './scores-handler';

const form = document.getElementById('new-score-form');
const refreshBtn = document.getElementById('refresh-item');
const ul = document.getElementById('scores-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = document.getElementById('user-name');
  const userScore = document.getElementById('user-score');
  addScore(userName.value, userScore.value);
  userName.value = '';
  userScore.value = '';
});

refreshBtn.addEventListener('click', () => {
  ul.innerHTML = '';
  getScores();
});

export default (scores) => {
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add('text-light');
    li.innerHTML = `
        <span class="ps-2">${score.user}: ${score.score} </span>    
        `;
    ul.appendChild(li);
  });
};