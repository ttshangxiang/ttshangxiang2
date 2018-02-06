const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
  contentBase: '/dist',
  hot: true,
  stats: {colors: true},
  host: 'localhost',
  historyApiFallback: true, // 配合BrowserRouter
  proxy: {
    '/api': {
        target: 'http://localhost:3000',
        secure: false
    }
  }
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8001, 'localhost', () => {
  console.log('dev server listening on port 8001');
});