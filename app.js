let grid = document.querySelector(".grid");

const startButton = document.getElementById(".container");

const coverScreen = document.querySelector(".cover-screen");

const result = document.getElementById("result");

const overText = document.getElementById("over-text");

let matrix,
    score, 
    isSwiped,
    touchY, 
    initialY = 0, 
    touchX,
    initialX = 0,
    rows = 4,
    columns = 4,
    swipeDirection;

let rectLeft = grid.getBoundingClientRect().left;

let rectTop = grid.getBoundingClientRect().top;

const getXY = (e) => {
    touchX = e.touches[0].pageX - rectLeft;
    touchY = e.touches[0].pageY - rectTop;
};

const createGrid = () => {
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            
            const boxDiv = document.createElement("div");

            boxDiv.classList.add("box");

            boxDiv.setAttribute("data-position", `${i}_${j}`);

            grid.appendChild(boxDiv);
        }
    }
};

const adjacentCheck = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] == arr[i + 1]) {
            return true;
        }
    }

    return false;
};

const adjacentCheck = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1]) {
        return true;
      }
    }
    return false;
};

const possibleMovesCheck = () => {
    for (let i in matrix) {
      if (adjacentCheck(matrix[i])) {
        return true;
      }
      
      let colarr = [];
      
      for (let j = 0; j < columns; j++) {
        colarr.push(matrix[i][j]);
      }
      
      if (adjacentCheck(colarr)) {
        return true;
      }
    }
    return false;
};

const randomPosition = (arr) => {
    return Math.floor(Math.random() * arr.length);
};

const hasEmptyBox = () => {
    for (let r in matrix) {
      for (let c in matrix[r]) {
        if (matrix[r][c] == 0) {
          return true;
        }
      }
    }
    return false;
};
  
const gameOverCheck = () => {
    if (!possibleMovesCheck()) {
      coverScreen.classList.remove("hide");
      container.classList.add("hide");
      overText.classList.remove("hide");
      result.innerText = `Final score: ${score}`;
      startButton.innerText = "Restart Game";
    }
};
