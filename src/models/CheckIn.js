import PostgresHelper from '../helpers/PostgresHelper';

const postgres = new PostgresHelper();
module.exports = {
  getUserCheckin(req, res) {
    const { userId } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT * FROM checkin WHERE user_id = $1',
      values: [userId],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },

  insertCheckin(req, res) {
    const {
      userId,
      addressId,
      dogId,
      value,
      qnt,
    } = req.body;
    const query = {
      text: 'INSERT INTO checkin (user_id, address_id, dog_id, value, qnt) VALUES($1, $2, $3, $4, $5)',
      values: [userId, addressId, dogId, value, qnt],
    };
    postgres.query(query, (data) => {
      res.send(data);
    });
  },
};
