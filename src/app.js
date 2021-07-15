const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const { sequelize } = require('./db/models');

sequelize
  .sync()
  .then(() => {
    console.log('Sequelize DB sync complete.');
  })
  .catch(console.error);

const app = express();
app.set('PORT', process.env.PORT || 3095);

app.listen(app.get('PORT'), () => {
  console.log(`listening on port ${app.get('PORT')}`);
});
