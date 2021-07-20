const DataTypes = require('sequelize');
const { Model } = DataTypes;

class ChannelChat extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: 'ChannelChat',
        tableName: 'channelChats',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
        sequelize,
      },
    );
  }
  static associate(db) {
    db.ChannelChat.belongsTo(db.User);
    db.ChannelChat.belongsTo(db.Channel);
  }
}

module.exports = ChannelChat;
