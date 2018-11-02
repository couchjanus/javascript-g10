# javascript-g10
```
npm i -D babel-core babel-loader babel-preset-env css-loader extract-text-webpack-plugin

npm i -D file-loader html-loader html-webpack-plugin image-webpack-loader lodash mini-css-extract-plugin node-sass raw-loader resolve-url-loader rimraf sass-loader style-loader uglifyjs-webpack-plugin webpack-dev-server webpack webpack-cli

```
# package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "prebuild": "rimraf public && npm install",
    "build": "webpack --mode production --colors --progress",
    "prestart": "rimraf public && npm install",
    "dev": "webpack-dev-server --mode development --hot --colors --progress"
  },

```
