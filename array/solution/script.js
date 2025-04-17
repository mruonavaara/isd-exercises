function rollDice() {
    document.getElementById("result").innerHTML = "";

    var count = parseInt(document.getElementById("rollCount").value);

    var frequencies = [0, 0, 0, 0, 0, 0];
    var dice = 0;

    for (var i = 0; i < count; i++) {
        dice = roll();
        frequencies[dice - 1]++;
    }

    for (var j = 1; j <= 6; j++) {
        console.log("Dice number", j, ", frequency: ", frequencies[j - 1]);

        var relativeFrequency = Math.round((frequencies[j - 1] / count) * 100);
        addBar(j, frequencies[j - 1], relativeFrequency);
    }
}

function roll() {
    return Math.floor(Math.random() * 6 + 1);
}

function addBar(diceNumber, frequency, relativeFrequency) {
    var diceNumberElem = document.createElement("div");
    diceNumberElem.classList.add("diceNumber");
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