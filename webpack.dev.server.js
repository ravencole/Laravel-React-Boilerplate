import open from 'open'
import path from 'path'
import colors from 'colors'
import dotenv from 'dotenv'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import WebpackDevConfig from './webpack.config.dev'

dotenv.config()

const PORT = process.env.JS_PORT || 8080,
      HOST = process.env.JS_HOST || 'localhost',
      devServerRoot = `${HOST}:${PORT}`,
      config = WebpackDevConfig(devServerRoot)

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    process: true
})
.listen(PORT, HOST, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Live reloading at http://${devServerRoot}`.green)
    }

    if (process.env.JS_OPEN === 'open') {
      open(`http://${process.env.APP_URL}`)
    }
})