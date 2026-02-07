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

const genRandomRGB = (opacity) => {
    return `rgb(${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)}, 
                ${opacity})`;
}

const increaseColorOpacity = (rgbColor) => {
    if (!rgbColor.split(',')[3]) return;

    let opacity = rgbColor.split(',')[3].split(')')[0];
    opacity = +opacity + .1 + ')';
    
    rgbColor = rgbColor.split(',');
    rgbColor[3] = ' ' + opacity;

    return rgbColor.join();
}

grid.addEventListener('mouseover', (event) => {
    const square = event.target;
    const isColored = square.classList.contains('colored');

    if (!isColored) {
        square.classList.add('colored');
        return square.style.backgroundColor = genRandomRGB(.1);
    }

    square.style.backgroundColor = increaseColorOpacity(square.style.backgroundColor);
})