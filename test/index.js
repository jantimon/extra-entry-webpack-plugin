/* eslint-env es6 */
import test from 'ava';
import path from 'path';
import rimraf from 'rimraf';
import ExtraEntryWebpackPlugin from '..';
import denodeify from 'denodeify';
import fs from 'fs';

const webpack = denodeify(require('webpack'));

let outputId = 0;
const extraFile = path.resolve(__dirname, 'fixtures/extra.js');
const extraFile2 = path.resolve(__dirname, 'fixtures/extra2.js');
rimraf.sync(path.resolve(__dirname, '../dist'));

function baseWebpackConfig (plugin) {
  return {
    devtool: 'eval',
    entry: path.resolve(__dirname, 'fixtures/entry.js'),
    output: {
      path: path.resolve(__dirname, '../dist', 'test-' + (outputId++))
    },
    plugins: [].concat(plugin)
  };
}

test('should generate the additional file', async t => {
  const stats = await webpack(baseWebpackConfig(
    new ExtraEntryWebpackPlugin({
      entry: extraFile,
      entryName: 'extra-file',
      outputName: 'extra-file-output.js'
    })
  ));
  const outputPath = stats.compilation.compiler.outputPath;
  const expectedFile = path.resolve(outputPath, 'extra-file-output.js');
  t.is(fs.existsSync(expectedFile), true);
});

test('should generate the additional file even if the entry name is empty', async t => {
  const stats = await webpack(baseWebpackConfig(
    new ExtraEntryWebpackPlugin({
      entry: extraFile,
      outputName: 'extra-file-output.js'
    })
  ));
  const outputPath = stats.compilation.compiler.outputPath;
  const expectedFile = path.resolve(outputPath, 'extra-file-output.js');
  t.is(fs.existsSync(expectedFile), true);
});

test('should generate the additional files even if the entry names are both empty', async t => {
  const stats = await webpack(baseWebpackConfig([
    new ExtraEntryWebpackPlugin({
      entry: extraFile,
      outputName: 'extra-file-output.js'
    }),
    new ExtraEntryWebpackPlugin({
      entry: extraFile2,
      outputName: 'extra-file-output2.js'
    })
  ]));
  const outputPath = stats.compilation.compiler.outputPath;
  const expectedFile = path.resolve(outputPath, 'extra-file-output.js');
  t.is(fs.existsSync(expectedFile), true);
  const expectedFile2 = path.resolve(outputPath, 'extra-file-output2.js');
  t.is(fs.existsSync(expectedFile2), true);
});
