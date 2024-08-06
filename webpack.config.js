const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    port: 3000,
    proxy: [
      {
        context: ['/api'],
        target: 'https://ruby-web-pr9094.pr.testing.vivino.com/api',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    ]
  }
};
