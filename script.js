const gridContainer = document.querySelector('.container');

function createGridColumn(num) {
    for (let i = 0; i < num; i++) {
        createGridRow(num);
    }
}

function createGridRow(num) {
    const grid = document.createElement('div');
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.onmouseover = () => row.style.background = 'black';
        grid.id = 'column-' + columnID;
        grid.appendChild(row);
    };
    gridContainer.appendChild(grid);
    columnID++;
}

let columnID = 0;
createGridColumn(8);

const btn = document.createElement('button');
btn.classList.add('btn-Grid');
btn.textContent = 'Grid Size';

document.body.insertBefore(btn, gridContainer);

function createGrid(num) {
    return createGridColumn(num);
}

btn.addEventListener('click', () => {
    let gridSize = +prompt('Enter a number for your Grid: ');
    if (isNaN(gridSize) || gridSize > 100 || gridSize <= 0) {
        while (isNaN(gridSize) || gridSize > 100 || gridSize <= 0) {
        gridSize = +prompt('Please enter a number between 1 and 100');
        }
    }
    gridContainer.innerHTML = '';
    createGrid(gridSize);
})