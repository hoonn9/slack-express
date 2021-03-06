const { Model, DataTypes } = require('sequelize');

class Workspace extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: 'name',
        },
        url: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: 'url',
        },
      },
      {
        modelName: 'Workspace',
        tableName: 'workspaces',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
  static associate(db) {
    db.Workspace.belongsTo(db.User);
    db.Workspace.belongsToMany(db.User, {
      through: db.WorkspaceMember,
      as: 'Members',
    });
    db.Workspace.hasMany(db.Channel);
    db.Workspace.hasMany(db.DM);
  }
}

module.exports = Workspace;
