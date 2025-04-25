require('./webpack.global');

const css = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
};

const jsx = {
  test: /\.(js|jsx)$/, 
  include: '/Users/chrisaaker/top/frame-client',
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
  include: '/Users/chrisaaker/top/frame-client',
  exclude: /node_modules/,
  use: {
    loader: 'ts-loader'
  }
};

const file_types = {
  rules: [
    css,
    jsx,
    tsx
  ]
};

const entry = './index.jsx';

// absolute path is required by webpack for the output path
const output = {
  filename: 'bundle.js',
  path: '/Users/chrisaaker/top/frame-server/dist'
};

const stats = { warnings: false };

const clearConsolePlugin = {
  apply: (compiler) => {
    compiler.hooks.watchRun.tap('ClearConsole', () => {
      process.stdout.write('\x1Bc'); // Clears the console
      console.logD('DEBUG: console cleared via webpack plugin: ' + time() + ' \n', 'blue');
    });
  }
};

const config_obj = {
  stats:          stats,
  entry:          entry,
  output:         output,
  module:         file_types,
  plugins:        [clearConsolePlugin]
};

module.exports = (env) => {
  return config_obj;
};