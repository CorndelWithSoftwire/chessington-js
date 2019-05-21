# chessington-js
Starter project for a chess-based TDD exercise

Install with `npm install`
Run tests with `npm test`
Start program with `npm start`. This will host a server on `localhost:3000`


Guide to the code
=================

## Board

When a board is created it initialises a 2-dimensional array of length 8.
That is, an array of 8 arrays, where each array inside has a length of 8.

These represent rows and columns.

So, to select the first row you can do 
`let row1 = board[0]`
And to get the second square of that row:
`let square = row1[1]`
Or, in shorthand:
`let square = board[0][1]`

`Board` then has the following methods to use:
`setPiece(square, piece)` places the given piece on a square returns nothing.
`getPiece(square)` returns the piece on a given square, if one is there.
`findPiece(pieceToFind)` will return the square that the piece is on, if it is on the board.
`movePiece(fromSquare, toSquare)` will move the piece on the fromSquare to the toSquare.

## Square

Squares have two properties: `row` and `col`.

Squares can be made one of two ways (I'm not really sure why...)
`let square1 = Square.at(0,1)`
OR
`let square2 = new Square(0,1)`
These are equal. You can check like this:
`square1.equals(square2)`. This will return a boolean (in this case, true.)

## Pieces

pieces have one method: `getAvailableMoves(board)`.
This method must be given the current board (so that it can know which moves are available!)
it returns an array, which is a list of `Square`s that are available to be moved to.
