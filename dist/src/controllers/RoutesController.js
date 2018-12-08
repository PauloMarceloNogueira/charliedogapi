'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Users = require('../models/Users');

var _Users2 = _interopRequireDefault(_Users);

var _PostgresHelper = require('../helpers/PostgresHelper');

var _PostgresHelper2 = _interopRequireDefault(_PostgresHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var postgres = new _PostgresHelper2.default();

module.exports = function () {
  function RoutesController(restify) {
    _classCallCheck(this, RoutesController);

    if (restify) {
      this.restify = restify;
      this.applyRoutes();
    }
  }

  _createClass(RoutesController, [{
    key: 'applyRoutes',
    value: function applyRoutes() {
      var _this = this;

      this.restify.get('/users/:id', function (req, res, next) {
        return _this.getUser(req, res);
      });
      this.restify.get('/users', function (req, res) {
        return _this.getUsers(req, res);
      });
      this.restify.post('/users', function (req, res) {
        return _this.insertUser(req, res);
      });
      this.restify.put('/users', function (req, res) {
        return _this.updateUser(req, res);
      });
      this.restify.del('/users/:id', function (req, res) {
        return _this.deleteUser(req, res);
      });
    }
  }, {
    key: 'getUsers',
    value: function getUsers(req, res) {
      postgres.query('SELECT * FROM users', function (data) {
        res.send(data);
      });
    }
  }, {
    key: 'getUser',
    value: function getUser(req, res) {
      var id = req.params.id;

      var query = {
        name: 'fetch-user',
        text: 'SELECT * FROM users WHERE id = $1',
        values: [id]
      };
      postgres.query(query, function (data) {
        res.send(data);
      });
    }
  }, {
    key: 'insertUser',
    value: function insertUser(req, res) {
      var _req$body = req.body,
          name = _req$body.name,
          cpf = _req$body.cpf;

      var query = {
        text: 'INSERT INTO users(name, cpf) VALUES($1, $2)',
        values: [name, cpf]
      };
      postgres.query(query, function (data) {
        res.send(data);
      });
    }
  }, {
    key: 'updateUser',
    value: function updateUser(req, res) {
      var _req$body2 = req.body,
          name = _req$body2.name,
          cpf = _req$body2.cpf,
          id = _req$body2.id;

      var query = {
        text: 'UPDATE users SET name=$1, cpf=$2 WHERE id=$3',
        values: [name, cpf, id]
      };
      postgres.query(query, function (data) {
        res.send(data);
      });
    }
  }, {
    key: 'deleteUser',
    value: function deleteUser(req, res) {
      var id = req.params.id;

      var query = {
        text: 'DELETE FROM users WHERE id=$1',
        values: [id]
      };
      postgres.query(query, function (data) {
        res.send(data);
      });
    }
  }]);

  return RoutesController;
}();