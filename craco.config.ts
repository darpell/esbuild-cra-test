const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

module.exports = {
    plugins: [
        { 
            plugin: require('craco-esbuild'),
            esbuildLoaderOptions: {
                loader: 'tsx',
                target: 'es2016',
            },
            esbuildMinimizerOptions: {
                target: 'es2016',
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