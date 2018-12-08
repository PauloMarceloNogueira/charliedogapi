import PostgresHelper from '../helpers/PostgresHelper';

const postgres = new PostgresHelper();
module.exports = {
  getDogs(req, res) {
    postgres.query('SELECT * FROM dogs', (data) => {
      res.send(data);
    });
  },

  getDog(req, res) {
    const { id } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT * FROM dogs WHERE id = $1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  insertDog(req, res) {
    const {
      name,
      breedId,
      picture,
      value,
    } = req.body;
    const query = {
      text: 'INSERT INTO dogs(name, breed_id, picture, value) VALUES($1, $2, $3, $4)',
      values: [name, breedId, picture, value],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  updateDog(req, res) {
    const {
      name,
      breedId,
      picture,
      value,
      id,
    } = req.body;
    const query = {
      text: 'UPDATE dogs SET name=$1, breed_id=$2, picture=$3, value=$4 WHERE id=$5',
      values: [name, breedId, picture, value, id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  deleteDog(req, res) {
    const { id } = req.params;
    const query = {
      text: 'DELETE FROM dogs WHERE id=$1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },
};
