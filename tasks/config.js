var path = require('path');
var gutil = require('gulp-util');

var self = module.exports = {
  flatMap: function(xs, f) {
    return xs.map(f).reduce((e, rest) => e.concat(rest), []);
  },

  composePath: function(...args) {
    return path.join(process.cwd(), ...args);
  },

  canonicalPath: function(...args) {
    return path.join(...args);
  },

  sharedConfiguration: {
    siteRemoteAssetsURI: 'site-assets.jxf.me',
    siteRootDirectoryName: 'blog',
    themeName: 'jxf-theme',
    assetManifestName: 'rev-manifest.json',
    siteAssetDirectorySuffixMappings: [  // [DEBUG] use ES6 Map like this: [['styles', ['**', '/*.scss']], [..., [...]], ...]
      {
        assetName: 'styles',
        inputs: ['**', '*.scss'],
        outputs: ['**', '*.css']
      },
      {
        assetName: 'scripts',
        inputs: ['**', '*.*'],
        outputs: ['**', '*.*']
      },
      {
        assetName: 'images',
        inputs: ['**', '*.*'],
        outputs: ['**', '*.*'],
      },
      {
        assetName: 'svgs',
        inputs: ['**', '*.*'],
        outputs: ['**', '*.*']
      }
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
    outputSite: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'public'),
    outputPublicAssets: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'public', 'assets'),
    outputIntermediateAssets: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'static', 'assets'),
    tasks: () => self.composePath('tasks'),
    siteRoot: () => self.composePath(self.sharedConfiguration.siteRootDirectoryName),
    // Map each siteContentDirectory `d` to '`d`/**/*'.
    siteContentPaths: () => {
      return self.sharedConfiguration.siteContentDirectories.map((e, i, a) => {
        return self.canonicalPath(self.sharedPaths.siteRoot(), e, '**', '*');
      });
    },

    assetRoot: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'assets'),
    temporaryAssetRoot: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'tmp'),
    themeRoot: () => self.canonicalPath(self.sharedPaths.siteRoot(), 'themes', self.sharedConfiguration.themeName),
    themeAssetRoot: () => self.canonicalPath(self.sharedPaths.themeRoot(), 'assets'),
    // Use both our local styles and the theme's styles.
    siteAssetRoots: () => [
      self.sharedPaths.assetRoot(),
      self.sharedPaths.themeAssetRoot()
    ],

    // Generates the Cartesian product of asset roots and asset directories.
    //   assetRoots: a list of directories containing assets
    //   shouldAddSuffixes: if true, add the entries from each asset type's suffixProperty
    //   assetPropertySource: which property from siteAssetDirectorySuffixMappings to use
    siteAssetPathGenerator: (
      {
        assetRoots = self.sharedPaths.siteAssetRoots(),
        shouldAddSuffixes = true,
        assetPropertySource = 'inputs'
      } = {}
    ) => {
      var mapPrefixesAndAssetDirectoriesToPaths =
        root => self.sharedConfiguration.siteAssetDirectorySuffixMappings.map(
          mapping => (shouldAddSuffixes) ?
            (self.canonicalPath(root, mapping.assetName, ...mapping[assetPropertySource])) :
            (self.canonicalPath(root, mapping.assetName))
        );

      return self.flatMap(assetRoots, mapPrefixesAndAssetDirectoriesToPaths);
    },
    siteAssetPathPrefixes: () => self.sharedPaths.siteAssetPathGenerator({shouldAddSuffixes: false}),
    siteAssetPaths: () => self.sharedPaths.siteAssetPathGenerator({shouldAddSuffixes: true}),

    // Get the asset path for the `assetType` specified.
    siteAssetPathsForAsset:
      ({assetType = 'styles'} = {}) => self.sharedPaths.siteAssetPaths().filter(
        (e) => e.split(path.sep).some((segment) => segment === assetType)
      ),
  }
};
