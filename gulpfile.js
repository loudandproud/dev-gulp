// Module to rquire whole directories
var requireDir = require('require-dir');

// Pulling in all tasks from the tasks folder
requireDir('./', {recurse: true });
