const CopyWebpackPlugin = require('copy-webpack-plugin');
const basePath = process.cwd();

const prod = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: basePath + '/log/*.{md,json}',
        to: global.server.assets + '/log/',
        flatten: true
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/**/meta/*.{md,json}',
        to: '/',
        flatten: false,
        transformPath (targetPath) {
          return targetPath.split('/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/')[1];
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/**/log/*.{md,json}',
        to: '/',
        flatten: false,
        transformPath (targetPath) {
          return targetPath.split('/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/')[1];
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/modules/**/*.njk',
        to: '/',
        flatten: false,
        transformPath (targetPath) {
          return targetPath.split('/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/')[1];
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/components/**/*.njk',
        to: '/',
        flatten: false,
        transformPath (targetPath) {
          return targetPath.split('/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/')[1];
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.server.assets + '/images/renditions/**/*.{png,gif,jpg,svg}',
        to: global.server.assets + '/images/',
        flatten: true,
      }
    ], {})
  ],
};

const dev = {
  plugins: [
    new CopyWebpackPlugin(
    [
      {
        from: basePath + '/log/*.{md,json}',
        to: global.server.assets + '/log/',
        flatten: true
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.server.assets + '/images/favicons/favicon-dev.ico',
        flatten: true,
        transformPath () {
          return 'favicon.ico';
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/**/meta/*.{md,json}',
        to: '/',
        flatten: false,
        transformPath (targetPath) {
          return targetPath.split('/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/')[1];
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/**/log/*.{md,json}',
        to: '/',
        flatten: false,
        transformPath (targetPath) {
          return targetPath.split('/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/')[1];
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/modules/**/*.njk',
        to: '/',
        flatten: false,
        transformPath (targetPath) {
          return targetPath.split('/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/')[1];
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/components/**/*.njk',
        to: '/',
        flatten: false,
        transformPath (targetPath) {
          return targetPath.split('/' + global.inputDirs.src + '/' + global.inputDirs.templates + '/')[1];
        }
      },
      {
        from: basePath + '/' + global.inputDirs.src + '/' + global.server.assets + '/images/renditions/*.{png,gif,jpg,svg}',
        to: global.server.assets + '/images/',
        flatten: true,
      }
    ], {})
  ],
}

module.exports = {
  prod: prod,
  dev: dev
};
