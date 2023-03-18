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
        cell.addEventListener("click", function(){colorMe(this)}) // for individual cell coloring
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
        cell = table.rows[i].insertCell()
        cell.addEventListener("click", function(){colorMe(this)}) // for individual cell coloring
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
    // Get our table and a placeholder for number of rows and columns
    table = document.getElementById("grid")
    let rows
    let columns
    
    // Continue execution only if the table is not 0x0
    if (table.rows[0]) {
        // Set our values for rows and columns
        rows = table.rows.length
        columns = table.rows[0].cells.length
        
        // If there is only 1 column, we just delete the rows (as it needs to become 0x0)
        if (columns <= 1) {
            // We start from the end of the list and decrement our counter
            // in order to avoid deleted rows messing with the count and
            // causing some to be skipped
            for (i = rows - 1; i >= 0; i--) {
                table.deleteRow(i)
            }
        } else {
            // If multiple columns exist, delete the last one
            for (i = 0; i < rows; i++) {
                table.rows[i].deleteCell(columns - 1)
            }
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    // Get our table and a placeholder for number of rows and columns
    table = document.getElementById("grid")
    let rows
    let columns
    
    // Continue execution only if the table is not 0x0 and a color is selected
    if (table.rows[0] && colorSelected) {
        // Set our values for rows and columns
        rows = table.rows.length
        columns = table.rows[0].cells.length
        
        // Set each cell in the table without a background color to the selected color
        for (i = 0; i < rows; i++) {
            for (j = 0; j < columns; j++) {
                if (!table.rows[i].cells[j].style.backgroundColor) {
                    table.rows[i].cells[j].style.backgroundColor = colorSelected
                }
            }
        }
    }
}

// Fill all cells
function fillAll(){
    // Get our table and a placeholder for number of rows and columns
    table = document.getElementById("grid")
    let rows
    let columns
    
    // Continue execution only if the table is not 0x0 and a color is selected
    if (table.rows[0] && colorSelected) {
        // Set our values for rows and columns
        rows = table.rows.length
        columns = table.rows[0].cells.length
        
        // Set each cell in the table to the selected color
        for (i = 0; i < rows; i++) {
            for (j = 0; j < columns; j++) {
                table.rows[i].cells[j].style.backgroundColor = colorSelected
            }
        }
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

function colorMe(cell){
    // If a color is selected, set the background of the passed cell to it
    if (colorSelected) {
        cell.style.backgroundColor = colorSelected
    }
}
