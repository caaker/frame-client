const path = require('path');
require('./webpack.global');

const css = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
};

const jsx = {
  test: /\.(js|jsx)$/, 
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};

const tsx = {
  test: /\.(ts|tsx)$/, 
  exclude: /node_modules/,
  use: {
    loader: 'ts-loader',
    options: { configFile: path.resolve(__dirname, 'tsconfig.json') }
  }
};

const file_types = {
  rules: [
    css,
    jsx,
    tsx
  ]
};

const entry = path.resolve(__dirname, 'index.jsx');

// absolute path is required by webpack for the output path
const output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, '_dist')
}

const stats = { warnings: false };

const config_obj = {
  stats:          stats,
  entry:          entry,
  output:         output,
  module:         file_types
};

module.exports = (env) => {
  return config_obj;
};
