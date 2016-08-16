'use strict';

var yargsParser = require('yargs-parser');

module.exports = function (conf) {
  var options = {
    configuration: {
      'dot-notation': false
    }
  };
  var argv = yargsParser(process.argv.slice(2), options);
  Object.keys(argv).forEach(function (key) {
    if (key !== '_') {
      conf.set(key, argv[key]);
    }
  });
};
