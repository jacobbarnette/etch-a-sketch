let container = document.getElementById('container');
let resetBtn = document.getElementById('resetBtn');
let columnCount = 0;
let gridSizeInput = document.getElementById('gridSizeInput');

let gridSize = 200;

function createGrid() {
    for(let i = 0; i < 64; i++) {
        let newDiv = document.createElement('div');
            newDiv.classList  = 'cards';
            newDiv.addEventListener('mouseover', function() {
                if(newDiv.style.background == false) {
                    newDiv.style.background = randomColor();
                }
            })
        container.appendChild(newDiv);
    }
}

// function test(row) {
//     for(let i =0; i < gridSize; i++) {
//         let column = document.createElement('div');
//             column.setAttribute('class', 'column');
//         row.appendChild(column);
//         column.addEventListener('mouseover', function() {
//             if(column.style.background == false) {
//                 columnCount++
//                 column.style.background = randomColor();
//             }       
//         });
//     }  
// }
resetBtn.addEventListener('click', function() {
    let answer = prompt('Are you sure you want to continue?');
    if(answer.toLowerCase() === 'yes') {
        while(container.firstChild){
            container.removeChild(container.lastChild);
            }
        createGrid(gridSize);
    }
});

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
createGrid();