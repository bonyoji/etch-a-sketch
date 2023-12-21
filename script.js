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
        row.classList.add('row-' + rowID);
        grid.id = 'column-' + columnID;
        grid.appendChild(row);
        rowID++;
    }
    gridContainer.appendChild(grid);
    columnID++;
}

let columnID = 0;
let rowID = 0;
createGridColumn(16);
