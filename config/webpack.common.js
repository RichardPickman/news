const paths = require('./webpack.paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    commonModules: {
        rules: [
            {
              test: /\.(sass|scss|css)$/,
              use: [
                'style-loader',
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        autoprefixer({
                          overrideBrowserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
                        })
                      ],
                      sourceMap: true
                    }
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ],
            },
            {
              test: /\.ts$/i,
              use: 'ts-loader',
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/inline',
            }
        ],
    },
    commonPlugins: [
        new Dotenv(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'News',
          template: paths.src + '/index.html',
          favicon: paths.src + '/assets/favicon.ico',
          minify: true,
          filename: 'index.html',
        }),
      ],
    commonResolve: {
        // modules: [paths.src, 'node_modules'],
        extensions: ['.ts', '.js'],
        // alias: {
        //     '~': paths.src
        // }
    },
}
