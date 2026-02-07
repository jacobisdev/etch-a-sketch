const grid = document.querySelector('.grid');
const btnNewGrid = document.querySelector('.btn-grid');

let gridSize = 16;

const renderGrid = (size) => {
    grid.innerHTML = '';
    grid.style.maxWidth = `${size * 16}px`
    for (let i = 0; i < size; i++) {
        // const column = document.createElement('div');
        // column.classList.toggle('column');
        // grid.appendChild(column);
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.toggle('square');
            grid.appendChild(square);
        }
    }

}

btnNewGrid.addEventListener('click', () => {
    gridSize = +prompt('Select the desired grid size');
    let renderIsAllowed = gridSize >= 8 && gridSize <= 128;
    
    if (!renderIsAllowed) {
        return alert('Introduce a number between 8 and 128');
    }
    
    renderGrid(gridSize);
})

renderGrid(gridSize);

const squares = document.querySelectorAll('square');