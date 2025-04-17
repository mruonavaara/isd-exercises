function createMultiplicationTable() {
    var size = document.getElementById("input").value;
    size = parseInt(size);

    var text = "";

    // header row
    text += '<tr>';
    for (var i = 0; i <= size; i++) {
        if (i != 0) {
            text += '<th>' + i + '</th>';
        } else {
            text += '<th>x</th>';
        }
    }
    text += '</tr>';

    // multiplication rows
    for (var i = 1; i <= size; i++) {
        text += '<tr>';
        text += '<td>' + i + '</td>'; // the first is the row header
        for (var j = 1; j <= size; j++) {
            text += '<td title="' + `${i} x ${j}` + '">' + i * j + '</td>';
        }
        text += '</tr>';
    }

    // display the result
    document.getElementById("table").innerHTML = text;

    // return false to prevent the form from actually being submitted
    return false;
}

document.getElementById("button").onclick = createMultiplicationTable;