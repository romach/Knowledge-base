# Configure Webpack

## Add Webpack to project

Install dependencies

```bash
yarn add webpack webpack-cli --dev
```

Add `scripts` section to `package.json`:

```javascript
"scripts": {
  "build": "webpack"
}
```

## Add configuration file

Add `webpack.config.js`:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
```

Change `entry` according JavaScript files location.

## Add `HtmlWebpackPlugin` to bundle HTML

Add package

```bash
yarn add html-webpack-plugin --dev
```

Add configuration to `webpack.config.js`:

```diff
const path = require('path');
+ const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
+  plugins: [
+    new HtmlWebpackPlugin({
+      template: "./src/index.html"
+    })
  ]
};
```

## Use `CleanWebpackPlugin` to clean `/dist/` directory

Add package:

```bash
yarn add clean-webpack-plugin --dev
```

Add configuration to `webpack.config.js`:

```diff
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
+ const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
+   new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
```

## Use `file-loader` to copy images from `/src/` to `/dist/`

Add package:

```bash
yarn add file-loader --dev
```

