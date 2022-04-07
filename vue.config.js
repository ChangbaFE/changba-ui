module.exports = () => ({
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html'
    }
  },
  outputDir: 'lib',
  publicPath: './',
  // transpileDependencies: false,
  filenameHashing: false,
  css: {
    sourceMap: true,
    extract: !(process.env.CB_EXTRACT_CSS === 'no' || process.env.NODE_ENV !== 'production')
  },
  chainWebpack(config) {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');

    config.performance
      .maxEntrypointSize(1024 * 1024 * 2)
      .maxAssetSize(1024 * 1024 * 2);

    config.module
      .rule('string-replace')
      .test(/daterangepicker\/daterangepicker\.js$/)
      .use('string-replace-loader')
      .loader('string-replace-loader')
      .options({
        search: "'moment'",
        replace: "'dayjs'"
      });

    config.module
      .rule('import-bootstrap')
      .test(/bootstrap\/js\/.+\.js$/)
      .use('imports-loader')
      .loader('imports-loader')
      .options({
        type: 'module',
        imports: {
          syntax: 'default',
          moduleName: 'jquery',
          name: 'jQuery'
        }
      });

    config.module
      .rule('import-select2')
      .test(/select2\/src\/js\/select2\/translation\.js$/)
      .use('imports-loader')
      .loader('imports-loader')
      .options({
        additionalCode: 'var require = false'
      });

    config.module
      .rule('import-dayjs')
      .test(/daterangepicker\/daterangepicker\.js$/)
      .use('imports-loader')
      .loader('imports-loader')
      .options({
        type: 'commonjs',
        imports: [
          'dayjs',
          'pure dayjs/locale/zh-cn'
        ],
        additionalCode: `
          dayjs.locale('zh-cn');
          dayjs.extend(require('dayjs/plugin/customParseFormat'));
          dayjs.extend(require('dayjs/plugin/weekOfYear'));
          dayjs.extend(require('dayjs/plugin/localeData'));
          dayjs.extend(require('dayjs/plugin/localizedFormat'));
          dayjs.extend(require('dayjs/plugin/isoWeek'));
          dayjs.extend(require('dayjs/plugin/arraySupport'));
          dayjs.extend(require('dayjs/plugin/badMutable'));
          dayjs.extend(require('dayjs/plugin/updateLocale'));
          dayjs.extend(require('dayjs/plugin/objectSupport'));
          dayjs.updateLocale('zh-cn', { weekStart: 0 });
        `
      });

    if (process.env.VUE_CLI_BUILD_TARGET === 'lib') {
      if (process.env.CB_EXTERNAL_MODULE === 'yes') {
        config.externals({
          'jquery': 'commonjs2 jquery',
          'jquery-mousewheel': 'commonjs2 jquery-mousewheel',
          'lodash/cloneDeep': 'commonjs2 lodash/cloneDeep',
          'lodash/get': 'commonjs2 lodash/get',
          'vex-js/src/vex': 'commonjs2 vex-js/src/vex',
          'dayjs': 'commonjs2 dayjs',
          'dayjs/locale/zh-cn': 'commonjs2 dayjs/locale/zh-cn',
          'dayjs/plugin/customParseFormat': 'commonjs2 dayjs/plugin/customParseFormat',
          'dayjs/plugin/weekOfYear': 'commonjs2 dayjs/plugin/weekOfYear',
          'dayjs/plugin/localeData': 'commonjs2 dayjs/plugin/localeData',
          'dayjs/plugin/localizedFormat': 'commonjs2 dayjs/plugin/localizedFormat',
          'dayjs/plugin/isoWeek': 'commonjs2 dayjs/plugin/isoWeek',
          'dayjs/plugin/arraySupport': 'commonjs2 dayjs/plugin/arraySupport',
          'dayjs/plugin/badMutable': 'commonjs2 dayjs/plugin/badMutable',
          'dayjs/plugin/updateLocale': 'commonjs2 dayjs/plugin/updateLocale',
          '@pnotify/core': 'commonjs2 @pnotify/core',
          '@pnotify/bootstrap3': 'commonjs2 @pnotify/bootstrap3',
          '@pnotify/font-awesome4': 'commonjs2 @pnotify/font-awesome4',
          'parsleyjs/src/parsley': 'commonjs2 parsleyjs/src/parsley',
          'parsleyjs/src/i18n/zh_cn': 'commonjs2 parsleyjs/src/i18n/zh_cn',
          'parsleyjs/src/i18n/zh_cn.extra': 'commonjs2 parsleyjs/src/i18n/zh_cn.extra',
          'qs/lib/stringify': 'commonjs2 qs/lib/stringify',
          'bootstrap-colorpicker': 'commonjs2 bootstrap-colorpicker'
        });
      }

      config
        .plugin('friendly-errors')
        .tap(args => {
          args[0].clearConsole = false;
          return args;
        });
    }

    config.optimization.minimizer('terser').tap(args => {
      args[0].terserOptions.output = {
        comments: /^\**!|@preserve|@license|@cc_on/i
      }
      args[0].terserOptions.compress.drop_console = true
      args[0].terserOptions.safari10 = true
      args[0].terserOptions.ie8 = true

      return args
    });
  }
});
