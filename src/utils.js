export const getEmptyBoard = (size = 3) => {
    let mat = [];
    for (let i = 0; i < size; i++) {
        mat[i] = [];
        for (let j = 0; j < size; j++) {
            mat[i][j] = null
        }
    }
    return mat;
}

export const checkWin = (board) => {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < board.length; i++) {
        // Check rows
        if (
            board[i][0] === board[i][1] &&
            board[i][1] === board[i][2] &&
            board[i][0] !== null
        ) {
            return true;
        }

        // Check columns
        if (
            board[0][i] === board[1][i] &&
            board[1][i] === board[2][i] &&
            board[0][i] !== null
        ) {
            return true;
        }
    }

    // Check diagonals
    if (
        (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
        (board[0][2] === board[1][1] && board[1][1] === board[2][0])
    ) {
        if (board[1][1] !== null) {
            return true;
        }
    }

    // No winner found
    return false;
}

export const checkDraw = (board) => {
    // Check if all cells are filled
    for (let i = 0; i < board.length; i++) {
        if (board[i].includes(null)) {
            return false;
        }
    }

    // No empty cells found
    return true;
}