'use strict';


// // to select a class use a dot, to select an id, use a hash
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Finally got it right!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// // need the value property because it is an input field
// document.querySelector('.guess').value = 17;

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20
let highScore = 0

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function winningStyle() {
    displayMessage('Finally got it right!');
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}

function incorrectGuess(message) {
    displayMessage(message);
    score--;
    document.querySelector('.score').textContent = score;
}

function defaultStyle() {
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = "";
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click',function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess) {

            displayMessage('You forgot to enter a guess!');

        } else if(guess === secretNumber) {

            displayMessage('Finally got it right!');
            document.querySelector('.number').textContent = guess;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (highScore < score) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        } else if (guess != secretNumber && score <= 1) {

            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0

        } else if(guess < secretNumber) {

            incorrectGuess('Too low!')
            
        } else if(guess > secretNumber) {
            
            incorrectGuess('Too high!')
        }
    }
);

document.querySelector('.again').addEventListener('click', function() {
    defaultStyle();
})


document.querySelector('.highscore').textContent = highScore;