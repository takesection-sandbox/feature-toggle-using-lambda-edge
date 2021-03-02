const path = require('path');
const webpack = require('webpack');
const slsw = require('serverless-webpack');

module.exports = {
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    plugins: [
        new webpack.DefinePlugin({
            PASS_LIST: JSON.stringify(slsw.lib.serverless['configurationInput']['custom']['passList'])
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    target: 'node',
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
};
