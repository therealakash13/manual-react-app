import path from "path";  // To resolve file paths

import HtmlWebpackPlugin from "html-webpack-plugin";  // injects your bundled JS (bundle.js) into an HTML file
// Without this, you’d have to manually include <script src="bundle.js"></script> in your HTML.

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // starting point of react app
  entry: "./src/index.js", // starting point of build process

  // location of bundle files
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,  // cleans / deletes old files in dist/ before each new build, so you don’t get outdated bundles.
  },

  // how webpack bundles file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regex for filetypes (.js/.jsx)
        exclude: /node_modules/,
        use: "babel-loader", // takes your modern JavaScript + JSX and converts it to older JS that browsers understand
      },
    ],
  },

  // extension name resolver
  resolve: {
    extensions: [".js", ".jsx"], // import modules without typing extensions
  },

  // extra features
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // a plugin that injects bundle script (<script src="bundle.js">) into your index.html file
    }),
  ],

  // local development setup
  devServer: {
    static: "./dist",
    port: 3000, 
    open: true,
    client: {
      logging: "none", // hides webpack logs in browser console
    },
    setupMiddlewares: (middlewares, devServer) => {
      process.stdout.write("\x1Bc"); // clears the terminal
      return middlewares;
    },
  },

  // build type (development / production)
  mode: "development",
  stats: "minimal",
  infrastructureLogging: { level: "warn" },
};
