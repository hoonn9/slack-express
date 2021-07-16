const DataTypes = require('sequelize');
const { Model } = DataTypes;

class Channel extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        private: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
      },
      {
        modelName: 'Channel',
        tableName: 'channels',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
        sequelize,
      },
    );
  }
  static associate(db) {
    db.Channel.belongsTo(db.Workspace);
    // db.Channel.hasMany(db.ChannelChat, { as: "Chats" });
    db.Channel.belongsToMany(db.User, {
      through: 'ChannelMembers',
      as: 'Members',
    });
  }
}

module.exports = Channel;
