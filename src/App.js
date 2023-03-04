import { useState } from 'react';
import './App.css';

const Cell = () => {
  const [val, setVal] = useState(0);
  return <td onClick={() => setVal(val + 1)}>{val}</td>;
};

const Row = () => (
  <tr>
    <Cell />
    <Cell />
    <Cell />
  </tr>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic tac toe</h1>
        <table>
          <tbody>
            <Row />
            <Row />
            <Row />
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
