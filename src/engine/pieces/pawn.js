import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const delta = this.player === Player.WHITE ? 1 : -1;
        
        const singleMoveSquare = Square.at(location.row + delta, location.col);
        const doubleMoveSquare = Square.at(location.row + 2 * delta, location.col);

        let normalMoves;
        if (!board.squareInBounds(singleMoveSquare) || board.squareIsOccupied(singleMoveSquare)) {
            normalMoves = [];
        } else if (!board.squareInBounds(doubleMoveSquare) || board.squareIsOccupied(doubleMoveSquare) || this.hasMoved) {
            normalMoves = [singleMoveSquare];
        } else {
            normalMoves = [singleMoveSquare, doubleMoveSquare];
        }

        const captureMoves = [
            Square.at(location.row + delta, location.col + 1), 
            Square.at(location.row + delta, location.col - 1)
        ].filter(square => board.squareInBounds(square) && board.squareIsOccupied(square) && this._isCapturable(board.getPiece(square)));

        return normalMoves.concat(captureMoves);
    }
}
