function makeGrid(columns, rows) {
  let makeArray = new Array(columns);
  for (let i = 0; i < makeArray.length; i++) {
    makeArray[i] = new Array(rows);
  }
  return makeArray;
}

const getCanvasWrapper = document.querySelector('[data-canvas]');

function magic() {
  let grid;
  let amountColumns = 50;
  let amountRows = 50;
  let size = 20;

  grid = makeGrid(amountColumns, amountRows);
  let ctx = getCanvasWrapper.getContext('2d');

  for (let x = 0; x < amountColumns; x++) {
    for (let y = 0; y < amountRows; y++) {
      grid[x][y] = Math.floor(Math.random() * 2);
      if (grid[x][y] === 1) {
        ctx.beginPath();
        ctx.rect( size, size, size, size );
        ctx.rect(x * size,y * size, size, size )
        ctx.fillStyle = 'rgba(255, 165, 0, 0.6)';
        ctx.fill();
      }
    }
  }
}

magic();
