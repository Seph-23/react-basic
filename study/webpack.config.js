const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development',    //실서비스: production
  devtool: 'eval',
  resolve: {
    extension: ['.js', '.jsx']
  },

  entry: {    //입력
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }],
  },

  output: {   //출력
    path: path.join(__dirname, 'dist'),   //(__dirname = 현재 폴더, 현재 폴더 안에 dist)
    filename: 'app.js'
  }
};