const Sequelize = require('sequelize');

const user = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};
db.User = user;

Object.values(db).forEach((model) => {
  model.init(sequelize);
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
