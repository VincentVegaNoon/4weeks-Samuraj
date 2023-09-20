const votingForm = document.querySelector('.voting-form');
const voteOptions = document.querySelector('.vote-options');
const userName = document.querySelector('.user-name');
const userID = document.querySelector('.user-id');
const resultDiv = document.querySelector('.vote-results');

const validUserId = new Map([
  ['Romus', '12345678'],
  ['Stasio', '11111111'],
  ['Barti', '12341234'],
  ['Dzastina', '00000001'],
]);

const voteCounts = new Map();
voteCounts.set('Opcja 1', 0);
voteCounts.set('Opcja 2', 0);
voteCounts.set('Opcja 3', 0);

const votedUsers = new Set();

const voting = (e) => {
  e.preventDefault();
  console.log('glosowanie');
  updateResults();
};

const updateResults = () => {
  let output = '';
  voteCounts.forEach((count, option) => {
    output += `${option} : ${count} glosow. `;
  });
  resultDiv.innerHTML = output;
};

votingForm.addEventListener('submit', voting);
