// Create references/variables
const gridContainer = document.querySelector(".grid-container");
const btnSize = document.querySelector("button#grid-size");

// add 16 by 16 divs to the grid container by adding 256 div items
// use for loop to add divs, element created in each loop and assign class
// use external css to set flexbox and arrange the grid with wrap 
// flex grow is 1, flex shrink is 0, flex basis 6% to have a row of 16
for (let i = 0; i < 256; i++) {
    const gridBox = document.createElement("div");
    gridBox.setAttribute('class', 'grid-box');
    gridContainer.appendChild(gridBox);
}

// add event listener to div gridContainer that listens for mouseover
// this takes advantage of bubbling. 
gridContainer.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.className == "grid-box") {
        highlight(target);
    }
});
// set up event listener for button click
btnSize.addEventListener("click", gridChangePrompt);

// Declare function to highlight bg-color with element as parameter
function highlight(elem) {
    elem.style.backgroundColor = "red";
};

function gridChangePrompt() {
    input = prompt("Enter a number from 1 to 100. The grid will update with that number of squares on each side.");
    if (input === null) {
        return;
    } else if (isNaN(input)) {
        alert("That is not a number. Please only enter a number and do not use any letters or special characters.");
        gridChangePrompt();
    } else if (input < 1 || input > 100) {
        alert("Your number is out of range. Please pick a number from 1 to 100.");
        gridChangePrompt();
    } else if (input >= 1 && input <= 100) {
        alert(input + " has been accepted!");
        changeGridSize(input);
    } else {
        alert("Error, please contact IT support");
    };
    return;
};

function changeGridSize(heightWidth) {
    alert("changeGridSize Called");
}