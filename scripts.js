const screenContainer = document.querySelector('#screen');

for (let i = 1; i <= 16; i++) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('divContainer');
    screenContainer.appendChild(divContainer);
    for (let i = 1; i <= 16; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        divContainer.appendChild(grid);
    }
}

const grids = document.getElementsByClassName('grid');
Array.from(grids).forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.classList.add('draw');
    })
})

const slider = document.querySelector("#slider");

const button = document.querySelector("#clear");
button.addEventListener('click', () => {
    Array.from(grids).forEach((grid) => {
        grid.classList.remove('draw');
    })
})

