const path = require('path');
const webpack = require('webpack');
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
      presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]]
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

const stats = { warnings: false };
const entry = path.resolve(__dirname, 'index.jsx');
const output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, '_dist')
};

const file_types = {
  rules: [css, jsx, tsx]
};

// node 24 broke my webpack build and this was added by gemeni/2026
// try vite asap 
module.exports = (env) => {
  const isProduction = env && env.production;
  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      'process': 'undefined' 
    })
  ];

  return {
    stats:   stats,
    entry:   entry,
    output:  output,
    module:  file_types,
    plugins: plugins
  };
};