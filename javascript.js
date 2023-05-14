function initializeGrid(gridSize) {
  const body = document.querySelector('body');
  const grid = document.createElement('div');
  const gridLine = document.createElement('div');
  const gridSquare = document.createElement('div');

  grid.setAttribute("id", "grid");
  gridLine.classList.add("gridLine");
  gridSquare.classList.add("gridSquare");

  const sizeRatio = 100 / gridSize;
  const sizeRatioString = sizeRatio.toString() + "%"

  gridLine.style.height = sizeRatioString;
  gridSquare.style.width = sizeRatioString;

  for (let i = 0; i < gridSize; i++) {
    let gridSquareClone = gridSquare.cloneNode(true);
    gridLine.appendChild(gridSquareClone);
  }

  for (let i = 0; i < gridSize; i++) {
    let gridLineClone = gridLine.cloneNode(true);
    grid.appendChild(gridLineClone);
  }

  body.appendChild(grid);
}

function changeGridSquareColor(gridSquare) {
  gridSquare.style.backgroundColor = "red";
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}

function deleteGrid() {
  const grid = document.querySelector("#grid");
  grid.remove();
}

function editGrid(userPrompt) {
  if (isNumeric(userPrompt)) {
    let gridSize = parseInt(userPrompt);
    if(gridSize > 100)
      gridSize = 100;
    deleteGrid();
    initializeGrid(gridSize);
    addHoverProperty();
  }
  else
    alert(typeof (userPrompt));
}


// 3
function addHoverProperty() {
  const gridSquares = document.querySelectorAll(".gridSquare");

  gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", () => {
      changeGridSquareColor(gridSquare);
    })
  });
}

// 2
const gridSize = 16;
initializeGrid(gridSize);
addHoverProperty();

// 4
const button = document.querySelector("button");
console.log(button);
button.addEventListener("click", () => {
  const userPrompt = prompt();
  editGrid(userPrompt);
})