import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Pawn from '../../../src/engine/pieces/pawn';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can make knights moves', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(4, 4), knight);

        const moves = knight.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(2, 5), Square.at(2, 3), Square.at(3, 6), Square.at(3, 2),
            Square.at(5, 6), Square.at(5, 2), Square.at(6, 5), Square.at(6, 3)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(4, 4), knight);

        const moves = knight.getAvailableMoves(board);

        moves.should.have.length(8);
    });

    it('can jump over other pieces', () => {
        const knight = new Knight(Player.WHITE);
        const firstPawn = new Pawn(Player.WHITE);
        const secondPawn = new Pawn(Player.BLACK);
        board.setPiece(Square.at(4, 4), knight);
        board.setPiece(Square.at(3, 4), firstPawn);
        board.setPiece(Square.at(3, 5), secondPawn);

        const moves = knight.getAvailableMoves(board);

        moves.should.deep.include(Square.at(2, 5));
    });

    it('cannot leave the board', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(0, 0), knight);

        const moves = knight.getAvailableMoves(board);

        const expectedMoves = [Square.at(1, 2), Square.at(2, 1)];

        moves.should.deep.have.members(expectedMoves);
    });

    it('can take opposing pieces', () => {
        const knight = new Knight(Player.WHITE);
        const opposingPiece = new Pawn(Player.BLACK);
        board.setPiece(Square.at(4, 4), knight);
        board.setPiece(Square.at(3, 6), opposingPiece);

        const moves = knight.getAvailableMoves(board);

        moves.should.deep.include(Square.at(3, 6));
    });

    it('cannot take the opposing king', () => {
        const knight = new Knight(Player.WHITE);
        const opposingKing = new King(Player.BLACK);
        board.setPiece(Square.at(4, 4), knight);
        board.setPiece(Square.at(3, 6), opposingKing);

        const moves = knight.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(3, 6));
    });

    it('cannot take friendly pieces', () => {
        const knight = new Knight(Player.WHITE);
        const friendlyPiece = new Pawn(Player.WHITE);
        board.setPiece(Square.at(4, 4), knight);
        board.setPiece(Square.at(3, 6), friendlyPiece);

        const moves = knight.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(3, 6));
    });
});
