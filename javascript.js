class GridManager {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.gridElement = null;
  }

  createGrid() {
    this.gridElement = document.createElement('div');
    this.gridElement.setAttribute('id', 'grid');

    const gridLine = document.createElement('div');
    gridLine.classList.add('gridLine');

    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare');

    const sizeRatio = 100 / this.gridSize;
    const sizeRatioString = sizeRatio + '%';

    gridLine.style.height = sizeRatioString;
    gridSquare.style.width = sizeRatioString;

    for (let i = 0; i < this.gridSize; i++) {
      const gridSquareClone = gridSquare.cloneNode(true);
      gridLine.appendChild(gridSquareClone);
    }

    for (let i = 0; i < this.gridSize; i++) {
      const gridLineClone = gridLine.cloneNode(true);
      this.gridElement.appendChild(gridLineClone);
    }

    document.body.appendChild(this.gridElement);
  }

  deleteGrid() {
    if (this.gridElement) {
      this.gridElement.remove();
      this.gridElement = null;
    }
  }

  changeGridSquareColor(gridSquare) {
    gridSquare.style.backgroundColor = 'red';
  }

  addHoverProperty() {
    if (this.gridElement) {
      const gridSquares = this.gridElement.querySelectorAll('.gridSquare');

      gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', () => {
          this.changeGridSquareColor(gridSquare);
        });
      });
    }
  }
}

function handleGridEditing(userPrompt) {
  if (isNumeric(userPrompt)) {
    let gridSize = parseInt(userPrompt);
    if (gridSize > 100) {
      gridSize = 100;
    }

    gridManager.deleteGrid();
    gridManager = new GridManager(gridSize);
    gridManager.createGrid();
    gridManager.addHoverProperty();
  } else {
    alert('Please enter a numeric value.');
  }
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}

let gridManager = null;

function initialize() {
  const gridSize = 16;
  gridManager = new GridManager(gridSize);
  gridManager.createGrid();
  gridManager.addHoverProperty();

  const button = document.querySelector('button');
  button.addEventListener('click', () => {
  const userPrompt = prompt('Enter grid size:');
  handleGridEditing(userPrompt);
  });
  }
  
  initialize();