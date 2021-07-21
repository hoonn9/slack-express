const Sequelize = require('sequelize');

const user = require('./user');
const workspace = require('./workspace');
const workspaceMember = require('./workspaceMember');
const channel = require('./channel');
const channelChat = require('./channelChat');
const dm = require('./dm');
const onlineMap = require('./onlineMap');
const onlineMember = require('./onlineMember');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};
db.User = user;
db.Workspace = workspace;
db.WorkspaceMember = workspaceMember;
db.Channel = channel;
db.ChannelChat = channelChat;
db.DM = dm;
db.OnlineMap = onlineMap;
db.OnlineMember = onlineMember;

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
