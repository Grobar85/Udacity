// Select color input
const setColor = document.getElementById('colorPicker');
// Select size input
function sizeInput() {

    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWeight').value;

    if (height > 0 && width > 0) {
        makeGrid(height, width)
    } else {
        alert("Please enter a grid size greater than 0");
    }
}



// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

    const table = document.getElementById('pixelCanvas');
    table.innerHTML = '';
    const tblBody = document.createElement('tbody');
    
    for (let i = 0; i < height; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < width; j++) {
            const cell = document.createElement('td');
            cell.addEventListener('click', function () {
                cell.style.backgroundColor = setColor.value;
            });
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    table.appendChild(tblBody);
}
