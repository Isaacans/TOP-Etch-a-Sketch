// Create reference to the grid container
const gridContainer = document.querySelector(".grid-container");

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
// this takes advantage of bubbling. Add function to highlight bg-color
// see if the keyword 'this' can be used to change bg-color of div with
// mouseover to avoid use of ID references on each div.
function highlight(elem) {
    elem.style.backgroundColor = "red";
};

gridContainer.addEventListener("mouseover", (e) => {
    let target = e.target;
    console.log(target.className);
    if (target.className == "grid-box") {
        highlight(target);
    }
    console.log(target);
});

//gridContainer.addEventListener("mouseover", function (e) {
//    highlight(this);
//});
