// where the entry point is
// where output final bundle file

const path = require('path');

console.log(__dirname); // 

const output_path = path.join(__dirname, 'public'); // so that it works across OSes

module.exports = {
    entry: './src/app.js',
    output: {
        path: output_path, // need to give an absolute path
        filename: 'bundle-custom.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/

        }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: output_path
    }
};