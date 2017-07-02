var requireDir = require('require-dir');

// Load .env file.
require('dotenv').config();

// Require all tasks in gulp, including subfolders
requireDir('./tasks', { recurse: true });
