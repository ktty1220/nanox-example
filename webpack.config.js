var path = require('path');

var type = process.env.NANOX_BUILD_TYPE;
if (! type) throw new Error('process.env.NANOX_BUILD_TYPE is not defined');

var config = {
  mode: 'development',
  entry: path.join(__dirname, 'src/' + type + '/app.' + type + 'x'),
  output: {
    path: __dirname,
    filename: 'index-' + type + '.js'
  },
  resolve: {
    extensions: [ '.' + type + 'x', '.' + type ]
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: new RegExp('\\.' + type + 'x?$'),
      loader: ((type === 'ts') ? 'ts' : 'babel') + '-loader'
    }]
  }
};

if (type === 'ts') {
  config.resolve.extensions.push('.js');
}

module.exports = config;
