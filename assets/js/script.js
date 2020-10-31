let container = document.getElementById('container');


for(let i =0; i < 16; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    test(row);
}

function test(row) {
    for(let i =0; i < 16; i++) {
        let column = document.createElement('div');
        column.setAttribute('class', 'column');
        row.appendChild(column);
    }
}