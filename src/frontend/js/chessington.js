import Board from '../../engine/board';
import GameSettings from '../../engine/gameSettings';
import Player from '../../engine/player';
import Square from '../../engine/square';
import Pawn from '../../engine/pieces/pawn';
import Rook from '../../engine/pieces/rook';
import Knight from '../../engine/pieces/knight';
import Bishop from '../../engine/pieces/bishop';
import Queen from '../../engine/pieces/queen';
import King from '../../engine/pieces/king';

let chessBoardUI;
let board;

function positionObjectKey(square) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[square.row] + (square.col + 1).toString();
}

function positionObjectValue(piece) {
    const playerString = piece.player === Player.WHITE ? 'w' : 'b';
    
    if (piece instanceof Pawn) {
        return playerString + 'P'
    } else if (piece instanceof Rook) {
        return playerString + 'R'
    } else if (piece instanceof Knight) {
        return playerString + 'N'
    } else if (piece instanceof Bishop) {
        return playerString + 'B'
    } else if (piece instanceof Queen) {
        return playerString + 'Q'
    } else if (piece instanceof King) {
        return playerString + 'K'
    }
}

function boardToPositionObject() {
    let position = {};
    for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
        for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
            const square = Square.at(row, col);
            const piece = board.getPiece(square);

            if (!!piece) {
                position[positionObjectKey(square)] = positionObjectValue(piece);
            }
        }
    }
    return position;
}

export function createChessBoard() {
    board = new Board();

    chessBoardUI = ChessBoard(
        'chess-board', 
        {
            position: boardToPositionObject(board),
            showNotation: false,
            draggable: true
        }
    );
}
