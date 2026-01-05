const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot, {
  isCSSEnabled: true
});

config.resolver.sourceExts.push('mjs')

// add nice web support with optimizing compiler + CSS extraction
const { withSpiroKit } = require('@spirokit/metro-plugin')

module.exports = withSpiroKit(config, {
  outputCSS: './spirokit-web.css',
})