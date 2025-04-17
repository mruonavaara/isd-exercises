'use strict';

// randomly generate the number to guess in the range [0-100], 0 and 100 are also possible
var numberToGuess = Math.floor(Math.random() * (100 + 1));
console.log("Number to guess: " + numberToGuess); // debug output for the developer, comment out in the production version!

// TO DO: define a variable for the number of guesses made
let guesses = 0;

//
// Event handler for the form
//
function guessMade() {
  var input = document.getElementById('number').value;  // retrieve the value entered by the user
  var guess = Number(input);                           // interpret it as a number

  document.getElementById('form').reset();  // clear the form for a new guess

  console.log("The guess was " + guess);

  //  TO DO: Implement the game logic here!
  guesses = guesses + 1;

  let text = "";

  if (isNaN(guess)) {
    text = "Enter a valid number!"
  } else if (guess < numberToGuess) {
    text += "You guessed " + guess + ". The number is higher.";
  } else if (guess > numberToGuess) {
    text = "You guessed " + guess + ". The number is lower.";
  } else {
    text = "Congratulations, " + guess + " is correct! You made " + guesses + " guesses."
  }

  document.getElementById("hint").innerHTML = text;
  /* 
  Algorithm:
    Update the number of guesses

    Create a variable for the hint text, set its value to empty
    
    If the player's guess is smaller than the number to guess,
        Set the hint text to "You guessed <number>. The number is higher."
    If the player's guess is larger than the number to guess,
        Set the hint text to "You guessed <number>. The number is lower."
    Otherwise
        Set the hint text to congratulations for the correct guess and the number of guesses
    
    Update the hint text to be visible to the user in the designated element.
  */

  // the onsubmit handler returns false to prevent the form from actually being submitted.
  // If the form were really submitted, the browser would reload the page and reset the game
  return false;
}

// set the event handler for the form, i.e., define which function is called when the form is submitted
document.getElementById('form').onsubmit = guessMade;