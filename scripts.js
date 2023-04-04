const screenContainer = document.querySelector('#screen');
const slider = document.querySelector("#slider");
const grids = document.getElementsByClassName('grid');
const button = document.querySelector("#clear");
const drawButton = document.querySelector("#draw");
const eraseButton = document.querySelector("#erase");

function makeGrid(value) {
    for (let i = 1; i <= value; i++) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('divContainer');
        screenContainer.appendChild(divContainer);
        for (let i = 1; i <= value; i++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            divContainer.appendChild(grid);
        }
    }
}


function drawScreen() {
    Array.from(grids).forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.classList.add('draw');
        })
})
}

function clearScreen() {
    button.addEventListener('click', () => {
        Array.from(grids).forEach((grid) => {
            grid.classList.remove('draw');
        })
    })
}

function erase() {
    Array.from(grids).forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.classList.remove('draw');
        })
})
}

makeGrid(slider.value);
drawButton.addEventListener('click', () => {
    drawScreen();
    drawButton.classList.add("selected");
    eraseButton.classList.remove("selected");
});
eraseButton.addEventListener('click', () => {
    erase()
    eraseButton.classList.add("selected");
    drawButton.classList.remove("selected");
    
});
clearScreen();
