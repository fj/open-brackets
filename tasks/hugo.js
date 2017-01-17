var g = require('gulp');

var cfg = require('./config');
var del = require('del');
var execute = require('child_process').execSync;
var gutil = require('gulp-util');
var path = require('path');

function hugo({localEnvironment = true} = {}) {
  var src = cfg.sharedPaths.siteRoot();
  var dest = cfg.sharedPaths.outputSite();
  gutil.log(`src: ${src}, dest: ${dest}`);

  var matchNewlines = /\n/gm;

  var cmd = `hugo
      --theme "${cfg.sharedConfiguration.themeName}"
      --config ${cfg.sharedPaths.configFile()}
      --source ${src}
      --destination ${dest}
      --verbose=true
  `.replace(matchNewlines, " ");

  if (localEnvironment) {
    cmd += `
      --buildDrafts=true
      --baseUrl="http://localhost:3000/"
    `.replace(matchNewlines, " ")
  }

  var result = execute(cmd, {encoding: 'utf-8', stdio: 'inherit'});
  gutil.log('hugo: \n' + result);
}

g.task('hugo:draft', function() {
    hugo();
});

g.task('hugo:all', ['revision'], function() {
    hugo();
});

g.task('hugo:live', ['revision'], function() {
    hugo({localEnvironment: false});
});
