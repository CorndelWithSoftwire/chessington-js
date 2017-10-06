import Board from '../../engine/board';

var chessBoardUI;
var board;

export function createChessBoard() {
    chessBoardUI = ChessBoard(
        'chess-board', 
        { 
            showNotation: false,
            draggable: true
        }
    );
    board = new Board();
}
