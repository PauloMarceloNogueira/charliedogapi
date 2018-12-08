'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RestifyHelper = require('../helpers/RestifyHelper');

var _RestifyHelper2 = _interopRequireDefault(_RestifyHelper);

var _RoutesController = require('./RoutesController');

var _RoutesController2 = _interopRequireDefault(_RoutesController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  // constructor
  function ApiController() {
    _classCallCheck(this, ApiController);

    this.restify = (0, _RestifyHelper2.default)();
    this.routesController = new _RoutesController2.default(this.restify);
  }

  // Verifico se existem as variáveis de ambiente necessárias


  _createClass(ApiController, [{
    key: 'checkEnvironment',
    value: function checkEnvironment() {
      if (!process.env.POSTGRES_HOST) {
        throw new Error('Missing POSTGRES_HOST {database host} environment var');
      }
      if (!process.env.POSTGRES_DB) {
        throw new Error('Missing POSTGRES_DB {database name} environment var');
      }
      if (!process.env.POSTGRES_USER) {
        throw new Error('Missing POSTGRES_USER {database master user} environment var');
      }
      if (!process.env.POSTGRES_PASS) {
        throw new Error('Missing POSTGRES_PASS {database password} environment var');
      }
    }
  }, {
    key: 'run',
    value: function run(callback) {
      this.checkEnvironment();
      this.restify.listen(process.env.RESTIFY_PORT || 8080, callback);
    }
  }]);

  return ApiController;
}();