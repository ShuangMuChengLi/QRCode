const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ROOT_PATH = path.resolve(__dirname, "public");
const TEM_PATH = path.resolve(ROOT_PATH, "html");
const APP_PATH = path.resolve(ROOT_PATH, "js");
const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
    entry: {
        cms:[APP_PATH +"/cms.js"],
        vendor:["vue/dist/vue.common.js","vue-resource","vue-router","lodash"],
    // ueditor:[path.resolve(ROOT_PATH, 'ueditor','ueditor.all.js')],
    // element:['element-ui']
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.common.js",
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader:"url-loader",
                    options: {
                        limit: 10000,
                        name: "img/[name].[hash:7].[ext]"
                    }
                }]
            },
            {
                test: /\.vue/,
                use: ["vue-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {test: /\.(ttf|woff|eot)$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:["vendor", "manifest"],
            minChunks: Infinity
        }),
        new BabiliPlugin(),
        new HtmlwebpackPlugin({
            template: path.resolve(TEM_PATH, "index.html"),
            filename: "index.html",
            chunks: ["cms","vendor", "manifest"],
            inject: "body"
        })
    ]
};
