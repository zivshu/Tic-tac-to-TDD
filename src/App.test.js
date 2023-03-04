import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic tac toe heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toHaveTextContent(/tic tac toe/i);
});

test('renders Tic Tac Toe Table', () => {
  render(<App />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument()
  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(3)
  const cells = screen.getAllByRole('cell');
  expect(cells).toHaveLength(9)
});

test('cell should render click counter', () => {
  render(<App />);
  const [cell] = screen.getAllByRole('cell');
  expect(cell).toHaveTextContent(0)
  cell.click()
  expect(cell).toHaveTextContent(1)
  cell.click()
  expect(cell).toHaveTextContent(2)
});