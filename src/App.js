import {useState} from 'react';
import './App.css';
import {checkWin, checkDraw, getEmptyBoard} from './utils';
import {produce} from "immer";

const Cell = ({content, onCellClick}) => (
    <td onClick={onCellClick}>{content}</td>
);

const Row = ({cells, onCellClick, rowIndex}) => (
    <tr>
        {cells.map((cell, j) => (
            <Cell
                key={j}
                onCellClick={() => onCellClick({i: rowIndex, j})}
                content={cell}
            />
        ))}
    </tr>
);

function App() {
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [board, setBoard] = useState(getEmptyBoard())
    const [winner, setWinner] = useState(null)
    const [isGameOver, setIsGameOver] = useState(false)

    const onCellClick = ({i, j}) => {
        if (!!board[i][j] || isGameOver) {
            return
        }

        const updatedBoard = produce(board, draft => {
            draft[i][j] = currentPlayer
        })

        setBoard(updatedBoard)
        toggleCurrentPlayer()

        if (checkWin(updatedBoard)) {
            setWinner(currentPlayer)
            setIsGameOver(true)
            return
        }

        if (checkDraw(updatedBoard)) {
            setIsGameOver(true)
        }
    }

    const toggleCurrentPlayer = () =>
        currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");

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
                    {board.map((row, i) => (
                        <Row
                            key={i}
                            onCellClick={onCellClick}
                            cells={row}
                            rowIndex={i}
                        />
                    ))}
                    </tbody>
                </table>
            </header>
        </div>
    );
}

export default App;
