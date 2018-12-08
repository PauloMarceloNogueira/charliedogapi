/* eslint class-methods-use-this: "off" */

import restifyHelper from '../helpers/RestifyHelper';
import RoutesController from './RoutesController';

module.exports = class ApiController {
  // constructor
  constructor() {
    this.restify = restifyHelper();
    this.routesController = new RoutesController(this.restify);
  }

  // Verifico se existem as variáveis de ambiente necessárias
  checkEnvironment() {
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

  run(callback) {
    this.checkEnvironment();
    this.restify.listen(process.env.RESTIFY_PORT || 8080, callback);
  }
};
