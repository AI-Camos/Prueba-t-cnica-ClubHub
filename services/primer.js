const getConnection = require('../libs/postgres')

class UserService {
  constructor() {}

  async find() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM tasks')
    return rta.rows;
  }
}
