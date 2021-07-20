const { Router } = require('express');
const express = require('express');
const { Workspace, User, sequelize, Channel } = require('../../db/models');
const router = express.Router();
const { isLoggedIn, isWorkspaceOwner } = require('../middleware');

// Get Workspaces by User
router.get('/workspaces', isLoggedIn, async (req, res, next) => {
  try {
    const workspaces = await Workspace.findAll({
      include: [
        {
          model: User,
          as: 'Members',
          attributes: ['id'],
          through: {
            where: {
              UserId: req.user.id,
            },
            attributes: ['UserId'],
          },
          required: true,
        },
      ],
    });
    return res.json(workspaces);
  } catch (error) {
    next(error);
  }
});

// Create Workspace
router.post('/workspaces', isLoggedIn, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const existWorkspace = await Workspace.findOne({
      where: {
        url: req.body.url,
      },
    });
    if (existWorkspace) {
      return res.status(404).send(error.response.message || '사용 중인 워크스페이스 URL입니다.');
    }
    const newWorkspace = await Workspace.create(
      {
        name: req.body.workspace,
        url: req.body.url,
        OwnerId: req.user.id,
      },
      {
        transaction: t,
      },
    );
    await newWorkspace.addMembers(req.user.id, {
      transaction: t,
    });
    const channel = await Channel.create(
      {
        name: '일반',
        WorkspaceId: newWorkspace.id,
      },
      {
        transaction: t,
      },
    );
    await channel.addMembers(req.user.id, {
      transaction: t,
    });
    await t.commit();
    return res.json(newWorkspace);
  } catch (error) {
    console.log(error);
    await t.rollback();
    next(error);
  }
});

// Get Workspace Members
router.get('/workspaces/:workspace/members', isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: {
        url: req.params.workspace,
      },
    });

    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스 입니다.');
    }

    const members = await workspace.getMembers({
      attributes: ['id', 'nickname', 'email'],
    });

    if (!members) {
      return res.status(403).send('워크스페이스에 멤버가 없습니다.');
    }
    return res.status(200).json(members);
  } catch (error) {
    console.dir(error);
    next(error);
  }
});

// Invite Workspace member
router.post('/workspaces/:workspace/members', isLoggedIn, isWorkspaceOwner, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const workspace = await Workspace.findOne({
      where: {
        url: req.params.workspace,
      },
      include: [
        {
          model: Channel,
          where: {
            name: '일반',
          },
        },
      ],
    });

    if (!workspace) {
      await t.rollback();
      return res.status(404).send('존재하지 않는 워크스페이스입니다.');
    }

    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      await t.rollback();
      return res.status(404).send('존재하지 않는 사용자입니다.');
    }

    await workspace.addMembers(user, { transaction: t });
    await workspace.Channels[0].addMembers(user, {
      transaction: t,
    });
    await t.commit();
    return res.status(200).send('ok');
  } catch (error) {
    await t.rollback();
    console.dir(error);
    next(error);
  }
});

// Kick member

module.exports = router;
