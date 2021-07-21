const DataTypes = require('sequelize');
const { Model } = DataTypes;

class OnlineMember extends Model {
  static init(sequelize) {
    return super.init(
      {
        clientId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        modelName: 'OnlineMember',
        tableName: 'onlineMembers',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
  static associate(db) {
    db.ChannelChat.belongsTo(db.Channel);
    db.OnlineMember.belongsTo(db.User);
  }
}

module.exports = OnlineMember;
