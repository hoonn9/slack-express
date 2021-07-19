module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';

  const sessionOptions = {
    name: 'connect.sid',
    path: '/',
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
    },
  };

  if (prod) {
    sessionOptions.cookie.secure = true;
    sessionOptions.cookie.proxy = true;
  }
  return sessionOptions;
};
