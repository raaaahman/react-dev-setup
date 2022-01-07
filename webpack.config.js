const HtmlPlugin = require( 'html-webpack-plugin' )

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: 'index.html'
})

module.exports = myConfiguration

function myConfiguration(env, argv) {
    const config = {
        plugins: [htmlPlugin],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
            ],
        },
    }

    if ( argv.mode === 'development' ) {
        config.devServer = {
            hot: true
        }
    }

    return config;
}
