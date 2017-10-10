import Square from '../square';

export default class Piece {
    constructor(player) {
        this.player = player;
        this.hasMoved = false;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.hasMoved = true;
    }

    _getAvailableLateralMoves(board) {
        return []
            .concat(this._getAvailableMovesInDirection(board, s => Square.at(s.row + 1, s.col)))
            .concat(this._getAvailableMovesInDirection(board, s => Square.at(s.row - 1, s.col)))
            .concat(this._getAvailableMovesInDirection(board, s => Square.at(s.row, s.col + 1)))
            .concat(this._getAvailableMovesInDirection(board, s => Square.at(s.row, s.col - 1)));
    }

    _getAvailableDiagonalMoves(board) {
        return []
            .concat(this._getAvailableMovesInDirection(board, s => Square.at(s.row + 1, s.col + 1)))
            .concat(this._getAvailableMovesInDirection(board, s => Square.at(s.row - 1, s.col + 1)))
            .concat(this._getAvailableMovesInDirection(board, s => Square.at(s.row + 1, s.col - 1)))
            .concat(this._getAvailableMovesInDirection(board, s => Square.at(s.row - 1, s.col - 1)));
    }

    _getAvailableMovesInDirection(board, directionFunc) {
        const location = board.findPiece(this);

        let moves = [], nextSquare = location;
        while (board.squareInBounds(nextSquare = directionFunc(nextSquare)) && board.squareIsEmpty(nextSquare)) {
            moves.push(nextSquare);
        }
        return moves;
    }
}
