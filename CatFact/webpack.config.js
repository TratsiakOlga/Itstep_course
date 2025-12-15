const path = require ('path');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'catfacts.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};