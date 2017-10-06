import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return new Array(0);
    }
}
