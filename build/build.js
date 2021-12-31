const webpack = require('webpack');
const Service = require('@vue/cli-service/lib/Service');
const PluginAPI = require('@vue/cli-service/lib/PluginAPI');
const genConfig = require('@vue/cli-service/lib/commands/build/resolveLibConfig');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const buildManifest = require('./manifest.json');

process.env.VUE_CLI_BUILD_TARGET = 'lib';
process.env.NODE_ENV = 'production';

const resolve = (dir) => path.join(__dirname, '..', dir);

const build = async ({ entry, filename, dest, libraryName, formats = 'commonjs', libraryExport, extractCss = false, external = true, minimize = false }) => {
  console.log(`Building ${entry} as ${filename} ...\n`);

  process.env.CB_EXTRACT_CSS = extractCss ? 'yes' : 'no';
  process.env.CB_EXTERNAL_MODULE = external ? 'yes' : 'no';

  const service = new Service(process.cwd());
  service.init('production');
  const api = new PluginAPI('changba-ui', service);

  const name = path.basename(filename, path.extname(filename));

  const webpackConfig = genConfig(api, {
    entry,
    name,
    formats
  }, {
    outputDir: dest
  });

  webpackConfig[0].entry = {
    [name]: resolve(entry)
  };

  if (libraryName) {
    webpackConfig.forEach(config => {
      config.output.library = libraryName;
      config.output.libraryExport = libraryExport;
      config.output.umdNamedDefine = true;
    });
  }

  if (minimize) {
    webpackConfig.forEach(config => {
      config.optimization.minimize = true;
    });
  }

  webpackConfig[0].output.filename = '[name].js';
  if (dest) {
    webpackConfig[0].output.path = api.resolve(dest);
  }
  webpackConfig[0].output.chunkFilename = 'chunk-[name].js';

  webpackConfig[0].plugins = webpackConfig[0].plugins.filter(item => !['HtmlWebpackPlugin'].includes(item.constructor.name));

  return new Promise((resolve) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        console.error(err);
      }

      if (stats.hasErrors()) {
        console.error('Build failed with errors.');
      }

      resolve();
    })
  })
};

const main = async () => {
  console.log(`Starting ...\n`);

  const buildQueue = buildManifest;

  // build select2 language
  const languageDir = path.join(__dirname, '../node_modules/select2/src/js/select2/i18n');
  let dir = fs.readdirSync(languageDir);

  dir.forEach((item) => {
    const name = path.basename(item);
    buildQueue.push({
      entry: `node_modules/select2/src/js/select2/i18n/${item}`,
      filename: name,
      formats: 'umd-min',
      libraryName: ['$cbSelectPlusI18n', '[name]'],
      dest: 'lib/select-plus/i18n'
    });
  });

  // build skins
  const skinsDir = path.join(__dirname, '../packages/admin-lte/src/skins');
  dir = fs.readdirSync(skinsDir);

  dir.forEach((item) => {
    const name = path.basename(item, '.less');
    buildQueue.push({
      entry: `packages/admin-lte/src/skins/${item}`,
      filename: `${name}.js`,
      dest: 'lib/theme/skins',
      extractCss: true,
      minimize: true
    });
  });

  for (const item of buildQueue) {
    if (Array.isArray(item)) {
      await Promise.all(item.map(item => build(item)));
    }
    else {
      await build(item);
    }
  }

  rimraf('lib/theme/**/*.{js,js.map}', () => {});

  console.log('Build complete.\n');
};

main();
