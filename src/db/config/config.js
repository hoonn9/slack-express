require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'slack',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
  test: {
    username: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'slack',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'slack',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
};
