function initializeGrid() {
  const body = document.querySelector('body');
  const grid = document.createElement('div');
  const gridLine = document.createElement('div');
  const gridSquare = document.createElement('div');
  const rowSize = 16;
  const colSize = 16;

  grid.setAttribute("id", "grid");
  gridLine.classList.add("gridLine");
  gridSquare.classList.add("gridSquare");

  for (let i = 0; i < colSize; i++) {
    let gridSquareClone = gridSquare.cloneNode(true);
    gridLine.appendChild(gridSquareClone);
  }

  for (let i = 0; i < rowSize; i++) {
    let gridLineClone = gridLine.cloneNode(true);
    grid.appendChild(gridLineClone);
  }

  body.appendChild(grid);
}

function changeGridSquareColor (gridSquare) {
  console.log("it happens")
  gridSquare.style.backgroundColor = "red";
}


initializeGrid();

const gridSquares = document.querySelectorAll(".gridSquare");

console.log(gridSquares);
gridSquares.forEach(gridSquare => {
  gridSquare.addEventListener("mouseover", () => {
    changeGridSquareColor(gridSquare);
  })
});

addEventListener("mouseover", () => { });