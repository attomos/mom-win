module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|test\.js)/,
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },
};
