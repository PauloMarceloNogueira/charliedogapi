import PostgresHelper from '../helpers/PostgresHelper';

const postgres = new PostgresHelper();
module.exports = {
  getDeliveryAddresses(req, res) {
    postgres.query('SELECT * FROM delivery_address', (data) => {
      res.send(data);
    });
  },

  getDeliveryAddress(req, res) {
    const { id } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT * FROM delivery_address WHERE id = $1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  insertDeliveryAddress(req, res) {
    const { address, userId } = req.body;
    const query = {
      text: 'INSERT INTO delivery_address(address, user_id) VALUES($1, $2)',
      values: [address, userId],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  updateDeliveryAddress(req, res) {
    const { address, userId, id } = req.body;
    const query = {
      text: 'UPDATE delivery_address SET address=$1, user_id=$2 WHERE id=$3',
      values: [address, userId, id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  deleteDeliveryAddress(req, res) {
    const { id } = req.params;
    const query = {
      text: 'DELETE FROM delivery_address WHERE id=$1',
      values: [id],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },
};
