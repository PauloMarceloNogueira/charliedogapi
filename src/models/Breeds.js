import PostgresHelper from '../helpers/PostgresHelper';

const postgres = new PostgresHelper();
module.exports = {
  getBreeds(req, res) {
    postgres.query('SELECT * FROM breeds', (data) => {
      res.send(data);
    });
  },

  getBreed(req, res) {
    const { id } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT * FROM breeds WHERE id = $1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  insertBreed(req, res) {
    const { name } = req.body;
    const query = {
      text: 'INSERT INTO breeds(name) VALUES($1)',
      values: [name],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  updateBreed(req, res) {
    const { name, id } = req.body;
    const query = {
      text: 'UPDATE breeds SET name=$1 WHERE id=$2',
      values: [name, id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  deleteBreed(req, res) {
    const { id } = req.params;
    const query = {
      text: 'DELETE FROM breeds WHERE id=$1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },
};
