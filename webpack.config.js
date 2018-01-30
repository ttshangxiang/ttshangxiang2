let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let path = require('path');

const base = {
  entry: ['./src/index.tsx'],
  output: {
    filename: './bundle.js',
    path: __dirname + '/dist'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {  
      src: path.resolve(__dirname, './src')  
    }
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },

      // Style
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },

      // images
      {
        test: /\.(?:svg|png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './imgs/[hash:8].[name].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin()
    
  ]
}

let config = base;
if (process.env.NODE_ENV == 'production') {
  config = Object.assign({}, base, {
    output: {
      filename: './[hash:8].bundle.js',
      path: __dirname + '/dist'
    },
    devtool: false,
    plugins: base.plugins.concat([
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  });
} else {
  config = Object.assign({}, base, {
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    entry: ['react-hot-loader/patch', './src/index.tsx'],
    plugins: base.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  });
}

module.exports = config;