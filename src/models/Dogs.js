/* eslint camelcase: "off" */
import PostgresHelper from '../helpers/PostgresHelper';

const postgres = new PostgresHelper();
module.exports = {
  getDogs(req, res) {
    postgres.query('SELECT dogs.value, dogs.id, dogs.age, dogs.picture, breeds.name, breeds.size FROM dogs INNER JOIN breeds ON breeds.id = dogs.breed_id', (data) => {
      res.send(data);
    });
  },

  getDog(req, res) {
    const { id } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT dogs.value, dogs.id, dogs.age, dogs.picture, breeds.name, breeds.size FROM dogs INNER JOIN breeds ON breeds.id = dogs.breed_id WHERE dogs.id = $1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  getDogsBySize(req, res) {
    const { size } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT dogs.value, dogs.id, dogs.age, dogs.picture, breeds.name, breeds.size FROM dogs INNER JOIN breeds ON breeds.id = dogs.breed_id WHERE breeds.size = $1',
      values: [size],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  getDogsByValue(req, res) {
    const { valueMax, valueMin } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT dogs.value, dogs.id, dogs.age, dogs.picture, breeds.name, breeds.size FROM dogs INNER JOIN breeds ON breeds.id = dogs.breed_id WHERE VALUE BETWEEN $1 AND $2',
      values: [valueMax, valueMin],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  insertDog(req, res) {
    const {
      age,
      breed_id,
      picture,
      value,
    } = req.body;
    const query = {
      text: 'INSERT INTO dogs(age, breed_id, picture, value) VALUES($1, $2, $3, $4)',
      values: [age, breed_id, picture, value],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  updateDog(req, res) {
    const {
      age,
      breed_id,
      picture,
      value,
      id,
    } = req.body;
    const query = {
      text: 'UPDATE dogs SET age=$1, breed_id=$2, picture=$3, value=$4 WHERE id=$5',
      values: [age, breed_id, picture, value, id],
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
