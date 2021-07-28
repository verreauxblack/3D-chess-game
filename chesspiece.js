const chesspiece = (id) => document.getElementById(id);


const chesspiecePosition = {
    "white": {
        "pawn": {
            '1': '71',
            '2': '72',
            '3': '73',
            '4': '74',
            '5': '75',
            '6': '76',
            '7': '77',
            '8': '78'
        },
        "rook": {
            '1': '81',
            '2': '88'
        },
        "knight": {
            '1': '82',
            '2': '87'
        },
        "bishop": {
            '1': '83',
            '2': '86'
        },
        "queen": {
            'position': '84'
        },
        "king": {
            'position': '85'
        }
    },
    "black": {
        "pawn": {
            '1': '21',
            '2': '22',
            '3': '23',
            '4': '24',
            '5': '25',
            '6': '26',
            '7': '27',
            '8': '28'
        },
        "rook": {
            '1': '11',
            '2': '18'
        },
        "knight": {
            '1': '12',
            '2': '17'
        },
        "bishop": {
            '1': '13',
            '2': '16'
        },
        "queen": {
            'position': '14'
        },
        "king": {
            'position': '15'
        }
    }
};


export { chesspiece, chesspiecePosition }