import path from "path";

export default  {
  entry: {
    main: "./main.js"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: []
};

