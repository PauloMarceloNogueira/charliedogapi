'use strict';

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

var _ApiController = require('./src/controllers/ApiController');

var _ApiController2 = _interopRequireDefault(_ApiController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_prettyError2.default.start(); // import settings from './src/config/settings';
// import restify_helper from './src/helpers/restify_helper';
// import users
// const server = restify_helper.server();
// server.listen(settings.port || 8080 , () => {
//   console.log(`running on https://localhost:${settings.port}`);
// });

var apiController = new _ApiController2.default();
apiController.run(function () {
  console.log('Api is up and running');
});