// Create reference to the grid container
const gridContainer = document.querySelector(".grid-container");

// add 16 by 16 divs to the grid container by adding 256 div items
// use flexbox to align the grid with wrap setting 
// step 1 make a standard div with flexbox 
// make 16 divs in a row with flexbox setting 
for (let i = 0; i < 256; i++) {
    const gridBox = document.createElement("div");
    gridBox.setAttribute('class', 'grid-box');
    gridContainer.appendChild(gridBox);
    console.log(gridBox);
}


