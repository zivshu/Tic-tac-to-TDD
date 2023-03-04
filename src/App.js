import { useState } from 'react';
import './App.css';
import { isBoardFull, getWinner } from "./utils";

const Cell = ({ val, onCellClicked }) => <td onClick={onCellClicked}>{val}</td>;


const Row = ({ cells, onCellClicked, index }) => (
  <tr>
    {cells.map((val, cellIndex) => (
      <Cell
        key={cellIndex}
        val={val}
        onCellClicked={() => onCellClicked(index, cellIndex)}
      />
    ))}
  </tr>
);

const initBoard = (n) => {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(null);
    }
  }
  return board;
};

const cloneBoard = (board) => board.map((row) => [...row]);

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const toggleCurrentPlayer = () =>
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");

  const [board, setBoard] = useState(initBoard(3));
  const onCellClicked = (rowIndex, cellIndex) => {
    if (board[rowIndex][cellIndex] === null && !winner) {
      const clonedBoard = cloneBoard(board);
      clonedBoard[rowIndex][cellIndex] = currentPlayer;
      setBoard(clonedBoard);
      const _winner = getWinner(clonedBoard);
      if (_winner) {
        setWinner(_winner);
        setIsGameOver(true);
      } else if (isBoardFull(clonedBoard)) {
        setIsGameOver(true);
      } else {
        toggleCurrentPlayer();
      }
    }
  };

  const title = winner
  ? `Winner winner chicken dinner: ${winner}`
  : isGameOver
  ? `Sometimes in life - it's a draw..`
  : `Current player is: ${currentPlayer}`;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic tac toe</h1>
        <h2>{title}</h2>
        <table>
          <tbody>
          {board.map((cells, i) => (
              <Row
                key={i}
                index={i}
                cells={cells}
                onCellClicked={onCellClicked}
              />
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
