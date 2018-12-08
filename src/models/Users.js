import PostgresHelper from '../helpers/PostgresHelper';

const postgres = new PostgresHelper();
module.exports = {
  getUsers(req, res) {
    postgres.query('SELECT * FROM users', (data) => {
      res.send(data);
    });
  },

  getUser(req, res) {
    const { id } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT * FROM users WHERE id = $1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  insertUser(req, res) {
    const { name, cpf } = req.body;
    const query = {
      text: 'INSERT INTO users(name, cpf) VALUES($1, $2)',
      values: [name, cpf],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  updateUser(req, res) {
    const { name, cpf, id } = req.body;
    const query = {
      text: 'UPDATE users SET name=$1, cpf=$2 WHERE id=$3',
      values: [name, cpf, id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  deleteUser(req, res) {
    const { id } = req.params;
    const query = {
      text: 'DELETE FROM users WHERE id=$1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },
};
