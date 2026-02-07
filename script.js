const grid = document.querySelector('.grid');
const btnNewGrid = document.querySelector('.btn-grid');

let gridSize = 16;

const renderGrid = (size) => {
    const gridWidth = 1024;
    grid.innerHTML = '';
    grid.style.width = `${gridWidth}px`;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        square.style.width = `${gridWidth / size}px`
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

const genRandomRGB = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)})`;
}

grid.addEventListener('mouseover', (event) => {
    let square = (event.target.classList.contains('square')) ? event.target : square;
    const isColored = square.classList.contains('colored');

    if (!isColored) {
        square.classList.add('colored');
        square.style.backgroundColor = genRandomRGB();
        square.style.border = 'none';
    }
    square.style.opacity = Math.min(1, +square.style.opacity + .1);
})