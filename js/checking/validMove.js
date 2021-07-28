import { getItem } from '../localStorage/index.js'

const items = getItem('chesspiece')

function isValid(move, color) {
    return (Object.values(items[color].pawn).includes(move) ||
    Object.values(items[color].rook).includes(move) ||
    Object.values(items[color].knight).includes(move) ||
    Object.values(items[color].bishop).includes(move) ||
    Object.values(items[color].queen).includes(move) ||
    Object.values(items[color].king).includes(move))
}

export const validMove = (validMoves, color ) =>validMoves.filter(move => !isValid(move.toString(), color))
