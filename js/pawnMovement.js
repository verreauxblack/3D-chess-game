// import { chesspiece } from "../chesspiece.js";

// let pawnStage = [0, 0, 0, 0, 0, 0, 0, 0];


// function movePawn(pawn, no) {
//     let pawnindex = 0;
//     if (no === 'p1') pawnindex = 0;
//     else if (no === 'p2') pawnindex = 1;
//     else if (no === 'p3') pawnindex = 2;
//     else if (no === 'p4') pawnindex = 3;
//     else if (no === 'p5') pawnindex = 4;
//     else if (no === 'p6') pawnindex = 5;
//     else if (no === 'p7') pawnindex = 6;
//     else if (no === 'p8') pawnindex = 7;
//     if (pawnStage[pawnindex] === 0) {
//         // console.log(stage)
//         chesspiece.white.pawn[no].grid_area = parseInt(chesspiece.white.pawn[no].grid_area) - 16;
//         pawn.style.gridArea = `c${chesspiece.white.pawn[no].grid_area}`;
//         pawnStage[pawnindex] += 2;
//     } else if (pawnStage[pawnindex] < 6) {
//         chesspiece.white.pawn[no].grid_area = parseInt(chesspiece.white.pawn[no].grid_area) - 8;
//         pawn.style.gridArea = `c${chesspiece.white.pawn[no].grid_area}`;
//         pawnStage[pawnindex] += 1;
//     }

//     // console.log(pawn.style)
//     console.log(pawnStage)
// }

function pawnMove(position, color) {
    let x = Math.floor(position / 10),
        y = position % 10;
    if (color === 'white') {
        x = x == 1 ? x : x -1;
    } else if(color === 'black') {
        x = x == 8 ? x :x + 1;
    }
    return x * 10 + y;
}

export default pawnMove;


// export { movePawn as default, pawnStage }