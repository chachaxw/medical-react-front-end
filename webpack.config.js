const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rucksack = require('rucksack-css');
const postcssFor = require('postcss-for');
const autoprefixer = require('autoprefixer');
const precss = require('precss');//可以在css中使用sass类型的Markup
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

const theme = {
    'primary-color': '#459fed',
};

let plugins = [

    new webpack.optimize.CommonsChunkPlugin({//提取公共的代码
        name: 'common',
        filename: '[name].bundle.js',
        chunkFilename : "[chunkhash].js",
        minChunks: 2 //公共代码的判断标准--：某个js模块被多少个chunk加载了才算是公共代码。
    }),

    new ExtractTextPlugin('[name].css', {allChunks: true}),//将css从style里抽离出来

    new HtmlWebpackPlugin({
      title: '药海遨游',
      filename:'index.html',  //#生成html的位置
      inject: 'body',                     //#插入script在body标签里
    }),

    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   'window.$': 'jquery',
    // });//引入jquery
];

if (isProduction) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({//丑化代码
            mangle: true,
            compress: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),//webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块：
        new webpack.optimize.DedupePlugin(),//如果你使用了一些有着很酷的依赖树的库，那么它可能存在一些文件是重复的。webpack可以找到这些文件并去重。这保证了重复的代码不被大包到bundle文件里面去，取而代之的是运行时请求一个封装的函数。不会影响语义
        new webpack.DefinePlugin({//配置之后相当于一个全局的变量
            'process.env': {
                NODE_ENV: '"production"' //这样设置的原因是源码里面 对生产环境的定义就是 process.env.NODE_ENV == 'production' 能够有效的对代码进行压缩
            }
        })
    )
}



let webpackConfig = {
    "debug": !isProduction,
    "devtool": isProduction ? null : '#cheap-module-source-map',
    "entry": ['./src/','babel-polyfill'],
    "output": {
        "path": path.join(__dirname, './build'),
        "filename" : '[name].chunkhash.js',
        "chunkFilename" : "[chunkhash].js",
        "publicPath": '/'
    },
    ////cdn配置
    // output: {
    //     path: "/home/proj/cdn/assets/[hash]",
    //     publicPath: "http://cdn.example.com/assets/[hash]/"
    // }
    "theme": "./src/theme.js",
    "resolve": {
        "extensions": ['', '.js', '.jsx'],
        "alias": {
            "components": path.resolve(__dirname, './src/components'),
            "models": path.resolve(__dirname, './src/models'),
            "public": path.resolve(__dirname, './src/public'),
            "routes": path.resolve(__dirname, './src/routes'),
            "services": path.resolve(__dirname, './src/services'),
            "utils": path.resolve(__dirname, './src/utils')
        }
    },
    "plugins": plugins,
    "module": {
        "loaders": [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            // {
            //     test: /_[a-z0-9]+\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            // },
            // {
            //     test: /^[^_]+\.css$/,
            //     loader: ExtractTextPlugin.extract('style','css!postcss')
            // },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!' +
                    'postcss!' +
                    `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
                ),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style','css!postcss')
            },
            {
                test: /\.jpe?g$|\.svg$|\.gif$|\.png$/i,
                loader: 'url-loader?limit=10000&name=images/[hash].png'
            },
            {
                test: /\.(woff2?|otf|eot|svg|ttf)$/i,
                loader: 'url?name=fonts/[name].[ext]'
            }]
    },
    "postcss": function () {
        return [
            precss,
            autoprefixer,
            postcssFor
        ];
    },
    "eslint": {
        configFile: './.eslintrc',
        emitError: true,
        emitWarning: true
    },
    "target": 'web',
    "stats": false,
    "progress": true
};

module.exports = webpackConfig;
