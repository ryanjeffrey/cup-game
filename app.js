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

playAgainButtonEl.disabled = true;

const hidingPlaces = ['one', 'two', 'three'];
console.log(hidingPlaces);

// set event listeners 
guessButtonOneEl.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * hidingPlaces.length);
    const answer = hidingPlaces[hidingSpot];
    handleGuess('one', answer);
    toggleButtons();
});

guessButtonTwoEl.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * hidingPlaces.length);
    const answer = hidingPlaces[hidingSpot];
    handleGuess('two', answer);
    toggleButtons();
});

guessButtonThreeEl.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * hidingPlaces.length);
    const answer = hidingPlaces[hidingSpot];
    handleGuess('three', answer);
    toggleButtons();
});

  // get user input
function handleGuess(userGuess, correctSpot) {
    totalGuesses++;

    if (correctSpot === 'one'){
        ballEl.style.gridColumn = '1';
    } else if (correctSpot === 'two'){
        ballEl.style.gridColumn = '2';
    } else if (correctSpot === 'three'){
        ballEl.style.gridColumn = '3';
    }

    if (userGuess === correctSpot) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }

    // update DOM to reflect the new state
    correctGuessesEl.textContent = correctGuesses;
    incorrectGuessesEl.textContent = incorrectGuesses;
    totalGuessesEl.textContent = totalGuesses;

    console.log(userGuess, correctSpot, ballEl.style.gridColumn);
}

function toggleButtons() {
    if (playAgainButtonEl.disabled === false) {
        playAgainButtonEl.disabled = true;
        guessButtonOneEl.disabled = false;
        guessButtonTwoEl.disabled = false;
        guessButtonThreeEl.disabled = false;
    } else {
        playAgainButtonEl.disabled = false;
        guessButtonOneEl.disabled = true;
        guessButtonTwoEl.disabled = true;
        guessButtonThreeEl.disabled = true;
    }
}
