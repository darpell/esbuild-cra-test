const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

module.exports = {
    plugins: [
        { 
            plugin: require('craco-esbuild'),
            esbuildLoaderOptions: {
                loader: 'tsx',
                target: 'es6',
            },
            esbuildMinimizerOptions: {
                target: 'es6',
                css: true,
            },
            skipEsbuildJest: false,
            esbuildJestOptions: {
            loaders: {
                    '.ts': 'ts',
                    '.tsx': 'tsx',
                },
            },
        }
    ],
};