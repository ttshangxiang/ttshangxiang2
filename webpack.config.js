let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let path = require('path');
module.exports = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
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
        use: ['url-loader']
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
    new webpack.HotModuleReplacementPlugin()
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM'
  },
};