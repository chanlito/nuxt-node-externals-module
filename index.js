const nodeExternals = require('webpack-node-externals');

function NodeExternalsModule(moduleOptions) {
  const options = {
    whitelist: [],
    ...moduleOptions,
  };

  this.extendBuild((config, { isServer }) => {
    if (config.name === 'server' || isServer) {
      config.externals = [nodeExternals(options)];
    }
  });
}

module.exports = NodeExternalsModule;

module.exports.meta = require('./package.json');
