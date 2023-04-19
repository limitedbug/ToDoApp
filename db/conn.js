const mysql = require('mysql2/promise');

async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tda',
  });

  console.log(`Connected to MySQL database`);

  return connection;
}

module.exports = {
    connect,
};