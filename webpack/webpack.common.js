const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const srcDir = path.join(__dirname, '..', 'src');

console.log(ESLintPlugin);

module.exports = {
  entry: {
    background: path.join(srcDir, 'background.ts'),
    content_script: path.join(srcDir, 'content_script.tsx'),
    options: path.join(srcDir, 'options.tsx'),
    popup: path.join(srcDir, 'popup.tsx'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'background';
      },
      name: 'vendor',
    },
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist/js'),
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'coffee'],
    }),
    new CopyPlugin({ patterns: [{ context: 'public', from: '.', to: '../' }] }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
