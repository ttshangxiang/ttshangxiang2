const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
  externals: {
    jquery: 'window.$'
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
        test: /\.(?:png|jpe?g|gif|ico)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(?:woff2?|eot|ttf|otf|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './node_modules/materialize-css/dist'),
        to: path.resolve(__dirname, './dist/materialize'),
        ignore: ['.*']
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './node_modules/jquery/dist/jquery.min.js'),
        to: path.resolve(__dirname, './dist/materialize/js'),
        ignore: ['.*']
      }
    ])
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
      new CleanWebpackPlugin([path.resolve(__dirname, './dist')], {
        allowExternal: true,
        exclude: ['.git']
      }),
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