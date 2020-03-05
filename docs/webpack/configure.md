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

Install package

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

