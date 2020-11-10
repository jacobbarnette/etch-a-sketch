let container = document.getElementById('container');
let resetBtn = document.getElementById('resetBtn');
let gridSize = 64;

function createGrid() {
    for(let i = 0; i < gridSize; i++) {
        let newDiv = document.createElement('div');
            newDiv.classList  = 'cards';
            newDiv.addEventListener('mouseover', function() {
                if(newDiv.style.background === false) {
                    newDiv.style.background = randomColor();
                }
            })
        container.appendChild(newDiv);
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

resetBtn.addEventListener('click', function() {
   
    if(answer === 'yes') {
        for(let i = 0; i <= gridSize; i++) {
            newDiv.style.backgroundColor = '';
        }
    }
})


function resetGrid() {
  for(let i = 0; i <= gridSize; i++){
     if(container.hasChildNodes) {
        container.removeChild();
     }
  }
}