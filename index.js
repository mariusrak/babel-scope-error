const webpack = require("webpack");

webpack(
  {
    entry: "./code.js",
    mode: "development",
    target: "web",
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              parserOpts: {
                errorRecovery: true,
              },
              plugins: ["./plugin.js"],
            },
          },
        },
      ],
    },
  },
  (err, stats) => {
    if (err) {
      console.log(err);
    } else if (stats.hasErrors()) {
      console.log(stats.toString({ colors: true }));
    } else {
      console.log("compiled");
    }
  }
);
