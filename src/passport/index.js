const passport = require('passport');
const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log('serializeUser', user);
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      console.log('deserializeUser', id);

      const user = await User.findOne({
        where: { id: id },
        attributes: ['id', 'nickname', 'email'],
      });
      done(null, user);
    } catch (error) {
      console.log(error);
      done(error);
    }
  });

  passport.use(
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        console.log('strategy');
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, {
              reason: '존재하지 않는 이메일 입니다.',
            });
          }

          const result = await bcrypt.compare(password, user.password);

          if (result) {
            return done(null, user);
          }
          return done(null, false, {
            reason: '비밀번호가 일치하지 않습니다.',
          });
        } catch (error) {
          console.log(error);
          return done(error);
        }
      },
    ),
  );
};
