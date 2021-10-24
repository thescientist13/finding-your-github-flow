const pluginImportCss = require('@greenwood/plugin-import-css');
const pluginThemePresentation = require('greenwood-starter-presentation');

module.exports = {
  title: 'Finding Your GitHub Flow',
  
  plugins: [
    ...pluginImportCss(),
    ...pluginThemePresentation()
  ]
};