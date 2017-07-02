var g = require("gulp");
var cfg = require('./config');
var gutil = require('gulp-util');
var commandExists = require('command-exists');
var execute = require('child_process').execSync;
var rs = require("run-sequence").use(g);

var self = module.exports = {
  syncAssetCommandName: 's3cmd',
  syncAssetsCommandExists: () => commandExists.sync(self.syncAssetCommandName),

  syncAssetsCommandTemplate: (credentials, command) => {
    var k = credentials.key;
    var s = credentials.secret;
    return `${self.syncAssetCommandName} --access_key=${k} --secret_key=${s} ${command}`;
  },
  s3RemoteForHost: (remote) => `s3://${remote}`,
  syncAssetsCommandFragmentMakeBucket: (bucketName) => `mb ${bucketName} --verbose`,
  syncAssetsCommandMakeDirectory: (directoryName) => `mkdir -p -v ${directoryName}`,
  syncAssetsCommandFragmentPushToRemoteBucket: (local, remote) =>
    `sync -H -M --recursive --no-mime-magic --verbose ${local} ${remote}`,
  syncAssetsCommandFragmentPullToLocalRepository: (local, remote) =>
    `sync -H -M --recursive --no-mime-magic --verbose --delete-removed ${remote} ${local}`,
};

g.task('sync:verify', () => {
  if (!self.syncAssetsCommandExists()) {
    throw new gutil.PluginError({
      plugin: 'sync:all',
      message: `no such command ${self.syncAssetCommandName}`
    });
  }
});

g.task('sync:make-asset-directories', () => {
  // Make asset root directory.
  var siteAssetRoots = cfg.sharedPaths.siteAssetRoots();
  siteAssetRoots.forEach(assetRoot => {
    var cmd = self.syncAssetsCommandMakeDirectory(assetRoot);
    return gutil.log(execute(cmd, {encoding: 'utf-8', stdio: 'inherit'}));
  });
});

g.task('sync:make-bucket', () => {
  // Make remote bucket.
  var targets = cfg.sharedConfiguration.siteAssetDirectorySuffixMappings.map(
    (suffixMapping) => suffixMapping.assetName
  );

  targets.forEach(target => {
    // local = source_for target
    // remote = destination_for target
    var cmd = `echo ${target}`;
    gutil.log(`executing: + ${cmd}`);
    gutil.log(execute(cmd, {encoding: 'utf-8', stdio: 'inherit'}));
    return;
  });

  // make bucket:
    // create asset root directory
    // make remote bucket

  // deploy files:
    // make specific asset directory
    // fetch remote files
    // push local files
  //execute_command "mkdir -p #{local}"
  //issue_s3_command "sync -H -M --recursive --no-mime-magic --verbose #{local} #{remote}"
  //issue_s3_command "sync -H -M --recursive --no-mime-magic --verbose --delete-removed #{remote} #{local}"
});

g.task('sync', function(callback) {
  rs(
    'sync:verify',
    'sync:make-asset-directories',
    'sync:make-bucket',
    callback
  );
});
