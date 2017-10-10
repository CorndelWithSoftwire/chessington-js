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

        if (this.hasMoved) {
            return [singleMoveSquare];
        } else {
            return [singleMoveSquare, doubleMoveSquare];
        }
    }
}
