'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pg = require('pg');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function PostgresHelper() {
    _classCallCheck(this, PostgresHelper);

    this.client = this.connect();
  }

  _createClass(PostgresHelper, [{
    key: 'query',
    value: function query(_query, callback) {
      this.client.query(_query, function (err, res) {
        if (err) {
          console.log(err.stack);
        } else {
          callback(res.rows);
        }
      });
    }
  }, {
    key: 'connect',
    value: function connect() {
      var client = new _pg.Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASS,
        port: 5432
      });
      client.connect();
      return client;
    }
  }]);

  return PostgresHelper;
}();