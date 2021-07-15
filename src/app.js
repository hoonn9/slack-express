const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./passport')();
const session = require('express-session');

const db = require('./db');
db();

const express = require('express');
const app = express();

const users = require('./routes/api/users');

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session(require('./config/session')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', users);
app.set('PORT', process.env.PORT || 3095);

app.listen(app.get('PORT'), () => {
  console.log(`listening on port ${app.get('PORT')}`);
});
