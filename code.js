// Create references/variables
const gridContainer = document.querySelector(".grid-container");
const btnSize = document.querySelector("button#grid-size");
let penColor = "rgb(98, 103, 167)";

// Call default grid
createGrid(16);

// Add event listener to div gridContainer that listens for mouseover, uses bubbling
gridContainer.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.className == "grid-cell") {
        highlight(target);
    }
});

// Set up event listener for button clicks
btnSize.addEventListener("click", gridChangePrompt);

/* Declare function that creates the grid - flexBasis used to cause cells
 to align by setting flex-basis to a percentage, found by dividing 100 by 
 number of horizontal cells. Uuse for loop to add divs, element created in 
 each loop to create unique objects otherwise it's the same object appended 
 on each for loop. Also assign class and use external css to set flexbox and 
 wrap to true, flex grow is 1, flex shrink is 0. */
function createGrid(heightWidth) {
    const flexBasis = 100/heightWidth;
    const totalCells = heightWidth * heightWidth;
    for (let i = 0; i < totalCells; i++) {
        const gridCell = document.createElement("div");
        gridCell.setAttribute('class', 'grid-cell');
        gridCell.style.flexBasis = `${flexBasis}%`;
        gridContainer.appendChild(gridCell);
    };
};

// Declare function to highlight bg-color with element as parameter
function highlight(elem) {
    elem.style.backgroundColor = penColor;
};

// Cancel exits prompt, which only accepts numbers and throws an error for the unexpected. 
function gridChangePrompt() {
    input = prompt("Enter a number from 1 to 100. The grid will update with that number of vertical & horizontal cells.");
    if (input === null) {
        return;
    } else if (isNaN(input)) {
        alert("That is not a number. Please only enter a number and do not use any letters or special characters.");
        gridChangePrompt();
    } else if (input < 1 || input > 100) {
        alert("Your number is out of range. Please pick a number from 1 to 100.");
        gridChangePrompt();
    } else if (input >= 1 && input <= 100) {
        removeGrid();
        createGrid(input);
    } else {
        alert("Error, please contact IT support");
    };
    return;
};

function removeGrid() {
    const oldGridCells = document.querySelectorAll("div.grid-cell");
    oldGridCells.forEach((gridCell) => {
        gridCell.remove();
    });
};