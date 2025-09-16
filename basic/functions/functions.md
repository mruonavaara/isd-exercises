# Functions


## 4. Guess my number

Write a program that draws a random number (1-100) and asks the user to guess the number until the user guesses correctly.
   
- If the user guesses a number that is too high, the program asks to guess a lower number.
- If the user guesses a number that is too low, the program asks to guess a higher number.
- When the user guesses the number correctly, the program tells the number of guesses.

__Hints__

- The number to guess can be generated with `Math.floor((Math.random() * 99) + 1)`
- The number to guess and the number of guesses must be defined outside the function