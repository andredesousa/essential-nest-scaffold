const { ProgressPlugin, NormalModuleReplacementPlugin, IgnorePlugin } = require('webpack');

const lazyImports = ['@nestjs/microservices', '@nestjs/websockets'];

/**
 * webpack configuration file, see link for more information:
 * https://webpack.js.org/configuration/
 *
 * @param { import("webpack").Configuration } options
 * @returns { import("webpack").Configuration }
 */
module.exports = function (options) {
  return {
    ...options,
    entry: './src/main.ts',
    externals: [],
    ignoreWarnings: [_ => true],
    mode: 'production',
    plugins: [
      ...options.plugins,
      new ProgressPlugin(),
      new NormalModuleReplacementPlugin(/environment\.ts/, 'environment.prod.ts'),
      new IgnorePlugin({
        checkResource: resource => lazyImports.some(path => resource.startsWith(path)),
      }),
    ],
  };
};
