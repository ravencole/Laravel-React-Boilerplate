import path from 'path'
import webpack from 'webpack'

export default function(devServerRoot) {
    return {
        context: `${__dirname}/resources/assets/js`,
        entry: [
            `webpack-dev-server/client?http://${devServerRoot}`,
            'webpack/hot/only-dev-server',
            'index'
        ],
        output: {
            path: `${__dirname}/public/js`,
            filename: 'bundle.js',
            publicPath: `http://${devServerRoot}/static/`
        },
        module: {
            loaders: [
                {test: /\.scss$/, loader: 'style!css!sass'},
                { test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], include: `${__dirname}/resources/assets`},
                { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['jsx-loader?insertPragma=React.DOM&harmony']},
                { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.scss'],
            root: [
                path.resolve('./resources/assets/js')
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    }
}