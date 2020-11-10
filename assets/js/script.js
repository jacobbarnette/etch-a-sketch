let container = document.getElementById('container');
let resetBtn = document.getElementById('resetBtn');
let gridSizeInput = document.getElementById('gridSizeInput');
let root = document.documentElement;



function createGrid(x) {
    for(let i = 0; i < x; i++) {
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

resetBtn.addEventListener('click', function() {
    let answer = prompt('Are you sure you want to continue?');
    if(answer.toLowerCase() === 'yes') {
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
        createGrid(64);
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
    let answer = prompt('How big would you like the grid? (2-100)');
    if(Number(answer) >= 2) {
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
        root.style.setProperty('--column-count', answer);
        answer = answer * answer;
        createGrid(answer);
    }
});


createGrid(64);