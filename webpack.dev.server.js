import path from 'path'
import dotenv from 'dotenv'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import WebpackDevConfig from './webpack.config.dev'

dotenv.config()

const PORT = process.env.JS_PORT,
      HOST = process.env.JS_HOST,
      devServerRoot = `${HOST}:${PORT}`,
      config = WebpackDevConfig(devServerRoot)

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    process: true
})
.listen(PORT, HOST, (err, result) => {
    if (err) 
        console.log(err);
    else
        console.log(`${devServerRoot}`);
})