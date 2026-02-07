const grid = document.querySelector('.grid');
const btnNewGrid = document.querySelector('.btn-grid');

let gridSize = 16;

const renderGrid = (size) => {
    const gridWidth = 512;
    grid.innerHTML = '';
    grid.style.width = `${gridWidth}px`;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        square.style.width = `${Math.round(gridWidth / size)}px`
        grid.appendChild(square);
    }
}

renderGrid(gridSize);

btnNewGrid.addEventListener('click', () => {
    gridSize = +prompt('Select the desired grid size');
    const renderIsAllowed = gridSize >= 8 && gridSize <= 128;
    
    if (!renderIsAllowed) {
        return alert('Introduce a number between 8 and 128');
    }
    
    renderGrid(gridSize);
})

grid.addEventListener('mouseover', (event) => {
    const square = event.target;
    // if (event.target.classList.contains('square')) square = event.target;

    const isColored = square.classList.contains('colored');

    (!isColored) ? square.classList.toggle('colored') : square;
})