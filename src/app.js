const dotenv = require('dotenv');
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.production.env' : '.development.env',
});
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('connect-flash');
const path = require('path');
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');
const users = require('./routes/api/users');
const workspaces = require('./routes/api/workspaces');
const channels = require('./routes/api/channels');
const channelChats = require('./routes/api/channelChats');
const dm = require('./routes/api/dm');

const webSocket = require('./socket');
const { uploadRouter } = require('./multer');

require('./db')();

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy');
  app.use(morgan('combined'));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
} else {
  // app.use(morgan('dev'));
  // app.use(
  //   cors({
  //     origin: true,
  //     credentials: true,
  //   })
  // );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    store: new FileStore(),
    ...require('./config/session')(),
  }),
);
app.use(flash());
require('./passport')(app);

app.use('/api', users);
app.use('/api', workspaces);
app.use('/api', channels);
app.use('/api', channelChats);
app.use('/api', dm);
app.use('/uploads', uploadRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.set('PORT', process.env.PORT || 3095);

const server = app.listen(app.get('PORT'), () => {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`listening on port ${app.get('PORT')}`);
});

webSocket(server, app);
// require('./cleaner');
