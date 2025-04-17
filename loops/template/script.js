function createMultiplicationTable() {
    let size = document.getElementById("input").value;
    size = parseInt(size);

    var text = "";

    // TO DO: header row
    
    // TO DO: multiplication rows
    
    // display the result
    document.getElementById("table").innerHTML = text;

    // return false to prevent the form from actually being submitted
    return false;
}

document.getElementById("button").onclick = createMultiplicationTable;