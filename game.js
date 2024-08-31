let secretNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

const guessInput = document.getElementById('your-guess');
const checkButton = document.getElementById('check-guess');
const hint = document.getElementById('hint');
const triesDisplay = document.getElementById('attempts');
const playAgainButton = document.getElementById('play-again');

checkButton.addEventListener('click', checkGuess);
playAgainButton.addEventListener('click', startNewGame);

function checkGuess() {
    const yourGuess = parseInt(guessInput.value);
    if (isNaN(yourGuess) || yourGuess < 1 || yourGuess > 100) {
        hint.textContent = "Oops! That's not a valid guess. Try a number between 1 and 100.";
        return;
    }

    tries++;
    triesDisplay.textContent = `Tries: ${tries}`;

    if (yourGuess === secretNumber) {
        hint.textContent = `Wow! You got it in ${tries} tries! The number was indeed ${secretNumber}.`;
        checkButton.disabled = true;
        playAgainButton.style.display = 'inline-block';
    } else if (yourGuess < secretNumber) {
        hint.textContent = "Nope, it's higher than that. Keep going!";
    } else {
        hint.textContent = "Not quite, my number is lower. Try again!";
    }
}

function startNewGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    tries = 0;
    hint.textContent = "I'm thinking of a new number... What's your guess?";
    triesDisplay.textContent = 'Tries: 0';
    guessInput.value = '';
    checkButton.disabled = false;
    playAgainButton.style.display = 'none';
}