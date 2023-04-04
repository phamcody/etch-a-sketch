const screenContainer = document.querySelector('#screen');

for (let i = 1; i <= 10; i++) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('divContainer');
    screenContainer.appendChild(divContainer);
    for (let i = 1; i <= 10; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.textContent="block";
        divContainer.appendChild(grid);
    }
}