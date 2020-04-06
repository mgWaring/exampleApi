module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    proxy: {
      '/api/devtask': {
        target: 'https://www.globalcyclingnetwork.com/',
        secure: false,
        changeOrigin: true,
      }
    }
  },
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node-modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        exclude: /node-modules/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  }
};