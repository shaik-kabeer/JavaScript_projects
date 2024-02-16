const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#user_input');
const guessSlot = document.querySelector('.prev_guess');
const remaining = document.querySelector('.Remaining_guess');
const lowORhi = document.querySelector('.lowORhi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number ');

    } else if (guess < 1) {
        alert("please enter a number more than 1");
    } else if (guess > 100) {
        alert("please enter a number less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over . Random number was${randomNumber}`);
            endGame();

        } else {
            displayGuess(guess);
            checkGuess(guess);


        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right `);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`number is t00 low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}
function displayMessage(message) {
    lowORhi.innerHTML = `<h2>${message}<h2>`
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<button class = "newGame" id="newGame">Start new Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
 function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' ,  () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}





