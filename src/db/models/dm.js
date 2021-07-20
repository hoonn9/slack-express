const DataTypes = require('sequelize');
const { Model } = DataTypes;

class DM extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: 'DM',
        tableName: 'dms',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        sequelize,
      },
    );
  }
  static associate(db) {
    db.DM.belongsTo(db.User, { as: 'Sender' });
    db.DM.belongsTo(db.User, { as: 'Receiver' });
    db.DM.belongsTo(db.Workspace);
  }
}

module.exports = DM;
