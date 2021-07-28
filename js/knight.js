import {validMove} from './checking/validMove.js'
function knightMove(position, color) {
    const x = Math.floor(position / 10),
        y = position % 10,
        movesX = [x - 2, x - 2, x + 2, x + 2, x - 1, x - 1, x + 1, x + 1],
        movesY = [y - 1, y + 1, y - 1, y + 1, y - 2, y + 2, y - 2, y + 2];

    let validMoves = [];
    for (let i = 0; i < movesX.length; i++) {
        if (movesX[i] >= 1 && movesX[i] <= 8 && movesY[i] >= 1 && movesY[i] <= 8) {
            validMoves.push(movesX[i] * 10 + movesY[i]);
        }
    }
    validMoves = validMove(validMoves, color);

    console.log(color,validMoves)
    return validMoves;
}

export default knightMove;