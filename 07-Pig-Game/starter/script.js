'use strict';

// Grab all classes and elements that will bee needed throughout the program
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


let currentPlayer = 0;
let currentScore = 0;
const scores = [0,0];

// function to switch player

const checkWinner = function () {
    if (scores[currentPlayer] >= 10) {
        document.getElementById(`name--${currentPlayer}`).textContent = 'WINNER!';
        btnRoll.disabled = true;
        btnHold.disabled = true;
    }

}

const switchPlayer = function() {
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');
   currentPlayer = currentPlayer === 0 ? 1 : 0;
   currentScore = 0;
}

const displayCurrentScore = function () {
    document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
}

// function to roll dice

btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice != 1) {

        currentScore += dice;
        displayCurrentScore();
        checkWinner();

    } else {
        currentScore = 0;
        displayCurrentScore();
        switchPlayer();
    }
});

// function to hold
btnHold.addEventListener('click', function() {
    scores[currentPlayer] += currentScore;
    currentScore = 0;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    displayCurrentScore();
    checkWinner();
    switchPlayer();
})


// new game

btnNew.addEventListener('click', function () {
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    current0El.textContent = 0;
    current1El.textContent = 0;
    currentPlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    btnRoll.disabled = false;
    btnHold.disabled = false;
})