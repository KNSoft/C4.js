const path = require('path');

module.exports = [{
    mode: 'production',
    entry: './Source/C4.js',
    output: {
        path: path.resolve(__dirname, 'Release'),
        filename: 'C4.min.js'
    },
    name: 'Prod',
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: 'css-loader'
            }
        ]
    }
}, {
    mode: 'none',
    entry: './Source/C4.js',
    output: {
        path: path.resolve(__dirname, 'Release'),
        filename: 'C4.js'
    },
    name: 'Dev',
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: 'css-loader'
            }
        ]
    }
}];