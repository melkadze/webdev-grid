// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // Get our table and a placeholder for number of colums
    table = document.getElementById("grid")
    let columns
    
    // Set columns to the number of columns, or 1 in the case of a 0x0
    if (table.rows[0]) {
        columns = table.rows[0].cells.length
    } else {
        columns = 1
    }
    
    // Add a new row to the table
    row = table.insertRow()
    
    // Add in the relevant number of cells to fit the column
    for (i = 0; i < columns; i++) {
        cell = row.insertCell()
    }
}

// Add a column
function addC() {
    // Get our table and a placeholder for number of row
    table = document.getElementById("grid")
    let rows
    
    // Set rows to the number of rows, or 1 in the case of a 0x0
    if (table.rows[0]) {
        rows = table.rows.length
    } else {
        // Add a new row to the table
        row = table.insertRow()
        rows = 1
    }
    
    // Add in the relevant number of cells to fit the column
    for (i = 0; i < rows; i++) {
        table.rows[i].insertCell()
    }
}

// Remove a row
function removeR() {
    // Get our table
    table = document.getElementById("grid")
    
    // If any rows exist, delete the last one
    if (table.rows[0]) {
        table.deleteRow(table.rows.length - 1)
    }
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
