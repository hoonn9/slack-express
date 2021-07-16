const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.sync({
      alter: true,
    });
    console.log('Sequelize DB sync complete.');
  } catch (error) {
    console.log(error);
  }
};
