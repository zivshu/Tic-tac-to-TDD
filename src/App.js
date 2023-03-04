import { useState } from 'react';
import './App.css';

const Cell = ({ currentPlayer, toggleCurrentPlayer }) => {
  const [val, setVal] = useState(null);
  const onClickHandler = () => {
    if (val === null) {
      setVal(currentPlayer);
      toggleCurrentPlayer();
    }
  };

  return <td onClick={onClickHandler}>{val}</td>;
};


  const Row = ({ currentPlayer, toggleCurrentPlayer }) => (
    <tr>
      {[1, 2, 3].map((i) => (
        <Cell
          key={i}
          currentPlayer={currentPlayer}
          toggleCurrentPlayer={toggleCurrentPlayer}
        />
      ))}
    </tr>
  );

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const toggleCurrentPlayer = () =>
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic tac toe</h1>
        <h2>Current player is: {currentPlayer}</h2>
        <table>
          <tbody>
          {[1, 2, 3].map((i) => (
              <Row
                key={i}
                currentPlayer={currentPlayer}
                toggleCurrentPlayer={toggleCurrentPlayer}
              />
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
