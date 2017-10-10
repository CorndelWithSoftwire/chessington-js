import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);

        const horizontalMoves = Array.from(Array(GameSettings.BOARD_SIZE).keys())
            .filter(ix => ix !== location.col)
            .map(ix => Square.at(location.row, ix));

        const verticalMoves = Array.from(Array(GameSettings.BOARD_SIZE).keys())
            .filter(ix => ix !== location.row)
            .map(ix => Square.at(ix, location.col));

        return horizontalMoves.concat(verticalMoves);
    }
}
