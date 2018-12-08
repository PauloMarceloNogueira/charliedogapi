'use strict';

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { bodyParser, CORS } from 'restify-plugins';

module.exports = function () {
  var server = _restify2.default.createServer();
  server.use(_restify2.default.plugins.bodyParser());
  server.use(_restify2.default.plugins.fullResponse());
  return server;
};