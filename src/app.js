const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('connect-flash');
const path = require('path');
const users = require('./routes/api/users');
const workspaces = require('./routes/api/workspaces');
const channels = require('./routes/api/channels');
const channelChats = require('./routes/api/channelChats');

const webSocket = require('./socket');
const { uploadRouter } = require('./multer');

require('./db')();

const app = express();

app.use(express.json());
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
app.use('/uploads', uploadRouter);
app.set('PORT', process.env.PORT || 3095);

const server = app.listen(app.get('PORT'), () => {
  console.log(`listening on port ${app.get('PORT')}`);
});

webSocket(server, app);
