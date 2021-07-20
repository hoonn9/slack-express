const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isNotLoggedIn, isLoggedIn } = require('../middleware');

const User = require('../../db/models/user');
const { Workspace } = require('../../db/models');

const router = express.Router();

router.get('/users', (req, res, next) => {
  return res.json(req.user || false);
});

// Workspace history
router.get('/users/history', (req, res, next) => {
  if (req.cookies['w-sid']) {
    if (req.user) {
      const w = JSON.parse(req.cookies['w-sid']);
      return res.json(w);
    }
    res.clearCookie();
  }
  return res.json(false);
});

// Login User
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

// Logout User
router.post('/users/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

// Join User
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

// Get User
router.get('/workspaces/:workspace/users/:id', isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: { url: req.params.workspace },
    });
    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스입니다.');
    }
    const user = await User.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Workspace,
          as: 'Workspaces',
          through: {
            where: {
              WorkspaceId: workspace.id,
            },
          },
          required: true,
        },
      ],
    });
    if (!user) {
      return res.status(404).send('존재하지 않는 사용자입니다.');
    }
    return res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
