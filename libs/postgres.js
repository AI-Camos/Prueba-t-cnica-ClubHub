const { Client } = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'brandon',
    password: 'admin123',
    database: 'hotel_data'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
