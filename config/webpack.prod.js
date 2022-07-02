const common = require('./webpack.common.js');
const paths = require('./webpack.paths.js');

const { commonModules, commonPlugins, commonResolve } = common;

module.exports = {
    mode: 'production',
    entry: [paths.src + '/index.ts'],
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        assetModuleFilename: 'image/[name].[ext]',
        clean: true,
    },
    module: {
        ...commonModules
    },
    plugins: [
        ...commonPlugins
    ],
    resolve: {
        ...commonResolve
    }
}
