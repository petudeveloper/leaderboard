import './style.css';

const form = document.getElementById('new-score-form');
const players = [
  {
    name: 'Player one',
    score: 100,
  },
  {
    name: 'Player two',
    score: 99,
  },
  {
    name: 'Player three',
    score: 98,
  },
  {
    name: 'Player four',
    score: 97,
  },
  {
    name: 'Player five',
    score: 96,
  },
  {
    name: 'Player six',
    score: 95,
  },
  {
    name: 'Player seven',
    score: 94,
  },
  {
    name: 'Player eight',
    score: 93,
  },
  {
    name: 'Player nine',
    score: 92,
  },
  {
    name: 'Player ten',
    score: 91,
  },
];

const render = () => {
  const list = document.getElementById('scores-list');
  players.forEach((player, index) => {
    const { name, score } = player;
    list.innerHTML += `
    <li id="user-${index}" class="list-element">
      <span id="name-${index}">${name}: </span>
      <span id="score-${index}"> ${score}</span>
    </li>
    `;
  });
};

render();

form.addEventListener('submit', (event) => {
  event.preventDefault();
});