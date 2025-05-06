// 
// Function to handle button press.
//
function rollDice() {
    // clear the result element from previous results
    document.getElementById("result").innerHTML = "";

    // TO DO: implement program logic
    // - read the number of repetitions from user input
    // - create an array for dice numbers
    // - perform the rolls and record the counts in the array
    // - based on the array, print the frequency information for each dice number
    //      - use the addBar function for printing
    //

}

//
// Function to roll a dice.
//
function roll() {
    return Math.floor(Math.random() * 6 + 1);
}

//
// Function to add a result row. The row is added to the element with id "result".
// Parameters:
// - dice number
// - frequency of the number (count)
// - relative frequency of the number (%)
// 
function addBar(diceNumber, frequency, relativeFrequency) {
    var diceNumberElem = document.createElement("div");
    diceNumberElem.classList.add("diceNumber")
    diceNumberElem.innerHTML = "Dice number " + diceNumber + ": " + frequency + " times ";

    var barElem = document.createElement("div");
    barElem.classList.add("bar");
    barElem.innerHTML = relativeFrequency + "%";
    barElem.style.width = relativeFrequency + "%";

    var rowElem = document.createElement("div");
    rowElem.classList.add("frequencyRow");
    rowElem.appendChild(diceNumberElem);
    rowElem.appendChild(barElem);

    document.getElementById("result").appendChild(rowElem);
}