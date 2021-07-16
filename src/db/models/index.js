const Sequelize = require('sequelize');

const user = require('./user');
const workspace = require('./workspace');
const workspaceMember = require('./workspaceMember');
const channel = require('./channel');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};
db.User = user;
db.Workspace = workspace;
db.WorkspaceMember = workspaceMember;
db.Channel = channel;
console.log(db);

Object.values(db).forEach((model) => {
  model.init(sequelize);
});

Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
