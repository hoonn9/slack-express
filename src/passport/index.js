const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

module.exports = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({
        where: { id: id },
        attributes: ['id', 'nickname', 'email'],
      });
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, {
              message: '존재하지 않는 이메일 입니다.',
            });
          }

          const result = await bcrypt.compare(password, user.password);

          if (result) {
            return done(null, user);
          }
          return done(null, false, {
            message: '비밀번호가 일치하지 않습니다.',
          });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      },
    ),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  return passport;
};
