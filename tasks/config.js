var path = require('path');
var gutil = require('gulp-util');

var self = module.exports = {
  composePath: function(...args) {
    return path.join(process.cwd(), ...args);
  },

  canonicalPath: function(...args) {
    return path.join(...args);
  },

  sharedConfiguration: {
    siteRootDirectoryName: 'blog',
    themeName: 'jxf-theme',
    siteAssetDirectories: [
      'styles',
      'scripts',
      'images',
      'svgs'
    ],
    siteContentDirectories: [
      'archetypes',
      'content',
      'data',
      'layouts',
      'themes'
    ],
  },

  sharedPaths: {
    configFile: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'config.yml'),
    output: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'public'),
    tasks: () => self.composePath('tasks'),
    siteRoot: () => self.composePath(self.sharedConfiguration.siteRootDirectoryName),

    assetRoot: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'assets'),
    themeAssetRoot: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'themes', self.sharedConfiguration.themeName, 'assets'),
    siteAssetRoots: () => [
      self.sharedPaths.assetRoot(),
      self.sharedPaths.themeAssetRoot()
    ],
    siteContentPaths: () => {
      return self.sharedConfiguration.siteContentDirectories.map((e, i, a) => {
        return self.canonicalPath(self.sharedPaths.siteRoot(), e, '**', '*');
      });
    },
  }
};
