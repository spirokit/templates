const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot, {
  isCSSEnabled: true
});

config.resolver.sourceExts.push('mjs')

module.exports = config;