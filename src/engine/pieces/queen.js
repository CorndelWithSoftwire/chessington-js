import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this._getAvailableLateralMoves(board).concat(this._getAvailableDiagonalMoves(board));
    }
}
