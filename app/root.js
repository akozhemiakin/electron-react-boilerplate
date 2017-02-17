/* eslint-disable global-require, import/no-absolute-path */

if (process.env.NODE_ENV === 'development') {
  require('babel-register');
  require('babel-polyfill');
  require('./main.development.js');
} else {
  require('./main.js');
}
