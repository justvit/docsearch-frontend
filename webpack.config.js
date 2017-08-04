var path = require('path');

module.exports = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 4000
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', "stage-0", 'react']
                }
            }
        ]
    }
};