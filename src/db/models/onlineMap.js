const DataTypes = require('sequelize');
const { Model } = DataTypes;

class OnlineMap extends Model {
  static init(sequelize) {
    return super.init(
      {
        namespace: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        modelName: 'OnlineMap',
        tableName: 'onlineMaps',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
  static associate(db) {
    db.OnlineMap.hasMany(db.OnlineMember, { as: 'Members' });
  }
}

module.exports = OnlineMap;
