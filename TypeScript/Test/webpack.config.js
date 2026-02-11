const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/game.ts',
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  module:{
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use:'html-loader'
      },
      {
        test: /\.[mc]?[jt]sx?$/i,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'babel-loader',
            options: {
                targets: "defaults",
                plugins: [
                  'babel-plugin-react-compiler',
                ],
                presets: [
                  ["@babel/preset-env"],
                  ["@babel/preset-react", { "runtime": "automatic" }]
                ]
            }
          },
        ]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins:[
  new HtmlWebpackPlugin({
    title: 'Output Management',
    template: path.resolve(__dirname, 'src/index.html') //__dirname=D:Tratsiak_Olga\Test - полный путь к шаблону
  }),
  new MiniCssExtractPlugin({
    filename: 'index.[fullhash].css' //'[name].css - если написать так, то в dist будет присваиваться имя main.css
  }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: [path.join(__dirname, 'src')],
    compress: true,
    hot:true,
    port: 9000,
  }
};