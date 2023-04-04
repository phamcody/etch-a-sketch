const screenContainer = document.querySelector('#screen');

for (let i = 1; i <= 2; i++) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('divContainer');
    screenContainer.appendChild(divContainer);
    for (let i = 1; i <= 2; i++) {
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

