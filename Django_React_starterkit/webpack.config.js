var path = require("path")  
var webpack = require('webpack')  
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {  
        context: __dirname,

        entry: [ 
        './assets/js/index', // webpack의 시작 포인트. Root Component 경로를 입력
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server'
        ],
      output: {
          path: path.resolve('./assets/bundles/'),
          filename: "[name]-[hash].js",
          publicPath: 'http://localhost:3000/assets/bundles/',
      }, 

      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(), // error가 있을 시, reload를 안하는 플러그인 
        new BundleTracker({filename: './webpack-stats.json'}),
      ],

      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loaders:['react-hot', 'babel?presets[]=es2015&presets[]=react']}, 
          // 모든 jsx 파일을 js 파일로 babel을 통해 컴파일합니다
        ],
      },

      resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
      },
    }
