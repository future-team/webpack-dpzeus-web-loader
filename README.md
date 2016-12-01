# webpack-dpzeus-web-loader
inject web path for dpzeus jsbrige

### Usage

####install
```bash
$ npm install dpzeus-web-loader --save
```

####webpack config
```javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "dpzeus-web-loader"
      }
    ]
  }
};
```
