let randomNumber = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultPress');
const lowOrHigh = document.querySelector('.lowOrHigh');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if(guess<1){
        alert('please enter a number greater than 1!');
    }else if(guess>100){
        alert('please enter a number less than 500!')
    }else{
        previousGuesses.push(guess);

        if(numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed correctly!`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Too low! try again!`)
    }else if(guess > randomNumber){
        displayMessage(`Too High! try again!`)
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`

    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses =1;
        guessSlot.innerHTML = '';
        lowOrHigh.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}