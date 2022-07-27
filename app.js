// import functions and grab DOM elements
const cupOneEl = document.getElementById('cup-one');
const cupTwoEl = document.getElementById('cup-two');
const cupThreeEl = document.getElementById('cup-three');

console.log(cupOneEl, cupTwoEl, cupThreeEl);

const ballEl = document.getElementById('ball');

const guessButtonOneEl = document.getElementById('guess-button-one');
const guessButtonTwoEl = document.getElementById('guess-button-two');
const guessButtonThreeEl = document.getElementById('guess-button-three');

console.log(ballEl, guessButtonOneEl, guessButtonTwoEl, guessButtonThreeEl);

const playAgainButtonEl = document.getElementById('play-again-button');
const scoreboardEl = document.getElementById('scoreboard');
const correctGuessesEl = document.getElementById('correct-guesses');
const incorrectGuessesEl = document.getElementById('incorrect-guesses');
const totalGuessesEl = document.getElementById('total-guesses');
const resetButtonEl = document.getElementById('reset-button');

console.log(playAgainButtonEl, scoreboardEl, correctGuessesEl, incorrectGuessesEl, totalGuessesEl, resetButtonEl);

// let state
let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

const hidingPlaces = ['cupOne', 'cupTwo', 'cupThree'];
console.log(hidingPlaces);

// set event listeners 
guessButtonOneEl.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * hidingPlaces.length);
    const answer = hidingPlaces[hidingSpot];
    console.log(answer);
});

guessButtonTwoEl.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * hidingPlaces.length);
    const answer = hidingPlaces[hidingSpot];
    console.log(answer);
});

guessButtonThreeEl.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * hidingPlaces.length);
    const answer = hidingPlaces[hidingSpot];
    console.log(answer);
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
