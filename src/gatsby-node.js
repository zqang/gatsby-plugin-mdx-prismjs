// const webpack = require(`webpack`)
const path = require('path');
// Add Glamor support
exports.modifyWebpackConfig = ({ config, stage }) => {
  const mdFiles = /\.mdx?$/;
  config.loader(`mdx`, {
    test: mdFiles,
    loaders: [
      'babel-loader?' + 'babelrc=false,' + 'presets[]=env,' + 'presets[]=react',
      // '@mdx-js/loader'
      path.resolve('markdown-loader.js')
    ]
  });
};

// Add Glamor support
// exports.modifyBabelrc = ({ babelrc }) => {
//   return Object.assign(babelrc, {
//     plugins: babelrc.plugins.concat(['@mdx-js/loader']),
//   })
// }
