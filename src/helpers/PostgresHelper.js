/* eslint class-methods-use-this:"off" */
import { Client } from 'pg';

module.exports = class PostgresHelper {
  constructor() {
    this.client = this.connect();
  }

  query(query, callback) {
    this.client.query(query, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        callback(res.rows);
      }
    });
  }

  connect() {
    const client = new Client({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASS,
      port: 5432,
    });
    client.connect();
    return client;
  }
};
