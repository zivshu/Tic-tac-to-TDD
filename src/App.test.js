import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders Tic tac toe heading', () => {
    render(<App/>);
    const [headingElement] = screen.getAllByRole('heading');
    expect(headingElement).toHaveTextContent(/tic tac toe/i);
});

test('should render current player', () => {
    render(<App/>);
    const headingElement = screen.getByText(/current player/i);
    expect(headingElement).toBeInTheDocument()
});

test('renders Tic Tac Toe Table', () => {
    render(<App/>);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument()
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3)
    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(9)
});

test('cell click - should render current player', () => {
    render(<App/>);
    const [cell1, cell2] = screen.getAllByRole('cell');
    expect(cell1).toBeEmptyDOMElement()
    fireEvent.click(cell1)
    expect(cell1).toHaveTextContent('X')
    fireEvent.click(cell1)
    expect(cell1).toHaveTextContent('X') // should stay X
    expect(cell2).toBeEmptyDOMElement()
    fireEvent.click(cell2)
    expect(cell2).toHaveTextContent('O')
});

const winGameRow = (cells) => {
    fireEvent.click(cells[3])
    fireEvent.click(cells[1])
    fireEvent.click(cells[4])
    fireEvent.click(cells[8])
    fireEvent.click(cells[5])
}

const winGameDiag = (cells) => {
    fireEvent.click(cells[0])
    fireEvent.click(cells[3])
    fireEvent.click(cells[4])
    fireEvent.click(cells[6])
    fireEvent.click(cells[8])
}

describe('Game over', () => {
    describe('Win Game', () => {
        test('Player X should win - row', () => {
            render(<App/>);
            const cells = screen.getAllByRole('cell')
            winGameRow(cells)
            const winnerTitle = screen.getByText('Winner winner chicken dinner: X')
            expect(winnerTitle).toBeInTheDocument()
        })

        test('Player X should win - diagonal', () => {
            render(<App/>);
            const cells = screen.getAllByRole('cell')
            winGameDiag(cells)
            const winnerTitle = screen.getByText('Winner winner chicken dinner: X')
            expect(winnerTitle).toBeInTheDocument()
        })
    })
})