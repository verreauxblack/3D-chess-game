import { chesspiece, chesspiecePosition as PiecePos } from './chesspiece.js';

import { setItem, getItem } from './js/localStorage/index.js';

import pawnMove from './js/pawnMovement.js'
import setStyle from './style.js';

import kingMove from './js/king.js'
import knightMove from './js/knight.js'

setStyle();

setItem('chesspiece', PiecePos);
let existing = getItem('chesspiece');

console.log(getItem('chesspiece').black.king.position);


// console.log(kingMove(34));
// console.log(knightMove(34));


console.log(chesspiece('w_pawn1'));

chesspiece('w_pawn1').addEventListener("click", e => {
    existing.white.pawn[1] = pawnMove(existing.white.pawn[1], 'white');
    setItem('chesspiece', existing);
    chesspiece('w_pawn1').style.gridArea = 'c' + existing.white.pawn[1];
    console.log(existing.white.pawn[1]);

})

chesspiece('w_knight1').addEventListener("click", e => knightMove(existing.white.knight[1], 'white'))
chesspiece('w_knight2').addEventListener("click", e => knightMove(existing.white.knight[2], 'white'))
chesspiece('b_knight1').addEventListener("click", e => knightMove(existing.black.knight[1], 'black'))
chesspiece('b_knight2').addEventListener("click", e => knightMove(existing.black.knight[2], 'black'))
chesspiece('w_king').addEventListener("click", e => kingMove(existing.white.king.position, 'white'))
// existing.white.knight[1] =
    // setItem('chesspiece', existing);
    // chesspiece('w_knight1').style.gridArea = 'c' + existing.white.knight[1];
    // console.log(existing.white.knight[1]);

// const pawn = document.getElementById("w_pawn1")
// chesspiece.white.pawn.p1.element.addEventListener("click", e => {
//     movePawn(e.target, 'p1');
// });
// chesspiece.white.pawn.p2.element.addEventListener("click", e => {
//     movePawn(e.target, 'p2');
// });
// chesspiece.white.pawn.p3.element.addEventListener("click", e => {
//     movePawn(e.target, 'p3')
// });
// chesspiece.white.pawn.p4.element.addEventListener("click", e => {
//     movePawn(e.target, 'p4');
// });
// chesspiece.white.pawn.p5.element.addEventListener("click", e => {
//     movePawn(e.target, 'p5');
// });
// chesspiece.white.pawn.p6.element.addEventListener("click", e => {
//     movePawn(e.target, 'p6');
// });
// chesspiece.white.pawn.p7.element.addEventListener("click", e => {
//     movePawn(e.target, 'p7',)
// });
// chesspiece.white.pawn.p8.element.addEventListener("click", e => {
//     movePawn(e.target, 'p8');

// });
// console.log(pawnStage)

