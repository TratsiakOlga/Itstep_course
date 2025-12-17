const path = require ('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/flakes.js',
  output: {
    filename: 'flakes.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
module:{
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ],
    },
  ]
}, 
plugins:[
new MiniCssExtractPlugin({
  filename: 'flakes.css'
    })
  ],
};