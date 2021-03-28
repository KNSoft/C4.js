const path = require('path');

module.exports = [{
    mode: 'production',
    entry: './Source/C4.js',
    output: {
        path: path.resolve(__dirname, 'Release'),
        filename: 'C4.min.js'
    },
    target: ['web', 'es5'],
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
    target: ['web', 'es5'],
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