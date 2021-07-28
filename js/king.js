import { validMove } from './checking/validMove.js';

function kingMove(position, color) {
    const x = Math.floor(position / 10),
        y = position % 10,
        movesX = [x, x - 1, x + 1],
        movesY = [y, y - 1, y + 1];
    let validMoves = [];
    for (let i = 0; i < movesX.length; i++) {
        for (let j = 0; j < movesY.length; j++) {
            if ( i !== 0 || j !== 0 ) {
                validMoves.push(movesX[i] * 10 + movesY[j]);
            }

        }
    }
 
    validMoves = validMove(validMoves, color);
    console.log(validMoves)
    return validMoves;
}

export default kingMove;