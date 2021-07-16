const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class WorkspaceMember extends Model {
  static init(sequelize) {
    return super.init(
      {
        loggedInAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        modelName: 'WorkspaceMember',
        tableName: 'workspacemembers',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
  static associate(db) {}
};
