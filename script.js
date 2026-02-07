const grid = document.querySelector('.grid');
const btnNewGrid = document.querySelector('.btn-grid');

let gridSize = 16;

const renderGrid = (size) => {
    grid.innerHTML = '';
    grid.style.width = `${size * 16}px`;
    for (let i = 0; i < size; i++) {
        // const column = document.createElement('div');
        // column.classList.toggle('column');
        // grid.appendChild(column);
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.toggle('square');
            square.style.width = `16px`
            grid.appendChild(square);
        }
    }

}

btnNewGrid.addEventListener('click', () => {
    gridSize = +prompt('Select the desired grid size');
    const renderIsAllowed = gridSize >= 8 && gridSize <= 128;
    
    if (!renderIsAllowed) {
        return alert('Introduce a number between 8 and 128');
    }
    
    renderGrid(gridSize);
})

renderGrid(gridSize);

grid.addEventListener('mouseover', (event) => {
    const square = event.target;

    const isColored = square.classList.contains('colored');

    (!isColored) ? square.classList.toggle('colored') : square;
})