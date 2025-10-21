let numberToGuess = Math.floor((Math.random() * 99) + 1);
let guessCount = 0;

function guess() {
    const userGuess = parseInt(document.getElementById('guess').value, 10);
    guessCount++;

    let text = "";
    if (userGuess > numberToGuess) {
        text = 'Too high! Try a lower number.';
    } else if (userGuess < numberToGuess) {
        text = 'Too low! Try a higher number.';
    } else {
        text = `Correct! You guessed the number in ${guessCount} attempts.`;
        // Optionally, reset for a new game
        // numberToGuess = Math.floor((Math.random() * 99) + 1);
        // guessCount = 0;
    }

    document.getElementById('result').innerHTML = text;
};
