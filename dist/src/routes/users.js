'use strict';

var _RestifyHelper = require('../helpers/RestifyHelper');

var _RestifyHelper2 = _interopRequireDefault(_RestifyHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _RestifyHelper2.default.server();
server.get('/users', function (req, res, next) {
  res.send('Todos Usuários');
  next();
});