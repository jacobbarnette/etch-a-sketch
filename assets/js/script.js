let container = document.getElementById('container');


for(let i =0; i < 20; i++) {
    let row = document.createElement('div');
        row.setAttribute('class', 'row');
    container.appendChild(row);
    test(row);
}

function test(row) {
    for(let i =0; i < 20; i++) {
        let column = document.createElement('div');
            column.setAttribute('class', 'column');
        row.appendChild(column);
        column.addEventListener('mouseover', function() {
            if(!column.style.background == true) {
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

