let container = document.getElementById('container');
let resetBtn = document.getElementById('resetBtn');
let columnCount = 0;
let gridSizeInput = document.getElementById('gridSizeInput');

let gridSize = 16;

function createGrid(gridSize) {
    console.log('1' + gridSize);
    for(let i =0; i < gridSize; i++) {
        let row = document.createElement('div');
            row.setAttribute('class', 'row');
        container.appendChild(row);    
        test(row);
    }  
}

function test(row) {
    for(let i =0; i < gridSize; i++) {
        let column = document.createElement('div');
            column.setAttribute('class', 'column');
        row.appendChild(column);
        column.addEventListener('mouseover', function() {
            if(column.style.background == false) {
                columnCount++
                column.style.background = randomColor();
            }       
        });
    }  
}

function randomColor () {
    let random = (min, max) => min + Math.floor(Math.random() * (max-min + 1));
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let rgb = `rgb(${r}, ${g}, ${b})`
    return rgb;
}


gridSizeInput.addEventListener('click', function() {
   let gridSize = prompt('How big of a grid ya wnat?');
   console.log(gridSize)
    createGrid(gridSize);
})

console.log(gridSize);
createGrid(gridSize);