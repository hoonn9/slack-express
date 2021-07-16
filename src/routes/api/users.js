const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isNotLoggedIn, isLoggedIn } = require('../middleware');

const User = require('../../db/models/user');

const router = express.Router();

router.get('/users', (req, res, next) => {
  return res.json(req.user || false);
});

router.post('/users/login', isNotLoggedIn, (req, res, next) => {
  console.log(req.flash());
  passport.authenticate(
    'local',
    {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
      successFlash: true,
    },
    (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, async (loginErr) => {
        if (loginErr) {
          console.error(loginErr);
          return next(loginErr);
        }

        const loggedUser = await User.findOne({
          where: { id: user.id },
          attributes: ['id', 'nickname', 'email'],
        });

        return res.status(200).json(loggedUser);
      });
    },
  )(req, res, next);
});

router.post('/users/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

router.post('/users', isNotLoggedIn, async (req, res, next) => {
  try {
    const existUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (existUser) {
      return res.status(403).send('이미 사용 중인 이메일입니다.');
    }

    const hashedPW = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPW,
    });

    res.status(200).send(`created user. email: ${newUser.getDataValue('email')}`);
  } catch (error) {
    console.error(error);
    // status code 500
    next(error);
  }
});

module.exports = router;
