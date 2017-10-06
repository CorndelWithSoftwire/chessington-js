const path = require('path');

const config = {
    entry: './dist/frontend/js/chessington.js',
    output: {
        filename: 'chessington.bundle.js',
        path: path.join(__dirname, 'dist', 'frontend', 'js'),
        libraryTarget: 'var',
        library: 'chessington'
    }
};

module.exports = config;