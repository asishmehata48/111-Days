const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const message = document.getElementById('message');
const messageText = document.getElementById('messageText');
const restartButton = document.getElementById('restartButton');

let oTurn;

const WINNING_COMBINATIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
  oTurn = false;
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  message.style.display = 'none';
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = oTurn ? 'o' : 'x';
  cell.classList.add(currentClass);

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    oTurn = !oTurn;
  }
}

function endGame(draw) {
  message.style.display = 'block';
  if (draw) {
    messageText.innerText = "It's a Draw!";
  } else {
    messageText.innerText = `${oTurn ? "O" : "X"} Wins!`;
  }
}

function isDraw() {
  return [...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'));
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass);
    });
  });
}
