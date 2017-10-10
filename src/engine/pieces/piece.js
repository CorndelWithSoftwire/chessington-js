import Square from '../square';

export default class Piece {
    constructor(player) {
        this.player = player;
        this.hasMoved = false;
        this.canBeCaptured = true;
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
        while (board.squareInBounds(nextSquare = directionFunc(nextSquare)) && this._isFreeOrCapturable(board, nextSquare)) {
            moves.push(nextSquare);
            if (board.squareIsOccupied(nextSquare)) {
                break;
            }
        }
        return moves;
    }

    _isFreeOrCapturable(board, square) {
        return board.squareIsEmpty(square) || this._isCapturable(board.getPiece(square));
    }

    _isCapturable(otherPiece) {
        return otherPiece.player !== this.player && otherPiece.canBeCaptured;
    }
}
