//imports useful elements, and assigns them to variables
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var toggle = document.getElementById("gridToggle");
var save = document.getElementById("saveArt");

//function to create grid and assign event listeners to all cells on creation
function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function(evt) {
                cell.style.backgroundColor = color.value;
            cell.addEventListener("contextmenu", function(evt) {
                evt.preventDefault();
                cell.style.backgroundColor = "white";
            } )
            } )
        }
    }
}

//function to toggle on/off grid within the design canvas
toggle.addEventListener("click", function() {
    var elementsTd = document.getElementsByTagName("td");
    var elementsTr = document.getElementsByTagName("tr");
    for (var i=0; i<elementsTd.length; ++i) {
        elementsTd[i].classList.toggle("off");
    }
    for (var j=0; j<elementsTr.length; ++j) {
        elementsTr[j].classList.toggle("off");
    }
});

//function that uses the size picker submit to call makeGrid() funtion
sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});

//function that saves the art as canvas
save.addEventListener("click", function(evt) {
    evt.preventDefault();
    html2canvas(canvas).then(canvas => {
        document.body.appendChild(canvas)
    });
});
