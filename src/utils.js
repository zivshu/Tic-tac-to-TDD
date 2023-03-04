export const isBoardFull = (board) =>
  board.every((row) => row.every((cell) => cell !== null));

const isRowWin = (board, player) =>
  board.some((row) => row.every((cell) => cell === player));

const isColumnWin = (board, player) => {
  for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
    if (board.every((row) => row[columnIndex] === player)) {
      return true;
    }
  }
  return false;
};

const isForwardDiagonalWin = (board, player) => {
  let res = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] !== player) {
      res = false;
    }
  }
  return res;
};
const isBackwardsDiagonalWin = (board, player) => {
  let res = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i][board.length - i - 1] !== player) {
      res = false;
    }
  }
  return res;
};
const isDiagonalWin = (board, player) =>
  isForwardDiagonalWin(board, player) || isBackwardsDiagonalWin(board, player);

const isPlayerWinner = (board, player) =>
  isRowWin(board, player) ||
  isColumnWin(board, player) ||
  isDiagonalWin(board, player);

export const getWinner = (board) => {
  return isPlayerWinner(board, "X")
    ? "X"
    : isPlayerWinner(board, "O")
    ? "O"
    : false;
};