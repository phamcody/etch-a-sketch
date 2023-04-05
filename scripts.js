const screenContainer = document.querySelector('#screen');
const slider = document.querySelector("#slider");
const grids = document.getElementsByClassName('grid');
const clearButton = document.querySelector("#clear");
const drawButton = document.querySelector("#draw");
const eraseButton = document.querySelector("#erase");
const colorChange = document.querySelector("#color");
const rainbow = document.querySelector("#rainbow");

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
    drawScreen();
}


function drawScreen() {
    Array.from(grids).forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.cssText = `background-color: ${colorChange.value}`;
        })
})
    drawButton.classList.add("selected");
    eraseButton.classList.remove("selected");
    rainbow.classList.remove("selected");
}

function clearScreen() {
    Array.from(grids).forEach((grid) => {
        grid.style.cssText = `background-color: #f9f5eb`;
    })
}

function erase() {
    Array.from(grids).forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.cssText = `background-color: #f9f5eb`;
        })
})
}

makeGrid(slider.value);



clearButton.addEventListener('click', () => {
    clearScreen();
});

drawButton.addEventListener('click', () => {
    drawScreen();
    drawButton.classList.add("selected");
    eraseButton.classList.remove("selected");
    rainbow.classList.remove("selected");
});


eraseButton.addEventListener('click', () => {
    erase()
    eraseButton.classList.add("selected");
    drawButton.classList.remove("selected");
    rainbow.classList.remove("selected");
});

rainbow.addEventListener('click', () => {
    Array.from(grids).forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            grid.style.cssText = `background-color: #${randomColor}`;
        })

    rainbow.classList.add("selected");
    drawButton.classList.remove("selected");
    eraseButton.classList.remove("selected");
})

})

slider.addEventListener('input', () => {
    console.log(slider.value);
    clearScreen();
    divContainer = document.getElementsByClassName("divContainer");
    Array.from(divContainer).forEach((container) => {
        screenContainer.removeChild(container);
    })
    makeGrid(slider.value);
    ratio = document.querySelector("#ratio");
    ratio.textContent = `${slider.value} x ${slider.value}`;
})

