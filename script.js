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
        grid.id = 'column-' + columnID;
        grid.appendChild(row);
    };
    gridContainer.appendChild(grid);
    columnID++;
}

let columnID = 0;

createGridColumn(8);

const gridItem = document.querySelectorAll('.row');

gridItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('row-On');
    })
})