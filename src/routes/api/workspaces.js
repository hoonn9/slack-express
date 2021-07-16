const express = require('express');
const { Workspace, User, sequelize, Channel } = require('../../db/models');
const router = express.Router();
const { isLoggedIn } = require('../middleware');

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
        },
      ],
    });
    return res.json(workspaces);
  } catch (error) {
    next(error);
  }
});

router.post('/workspaces', isLoggedIn, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const existWorkspace = await Workspace.findOne({
      where: {
        url: req.body.url,
      },
    });
    console.log('existWorkspace', t);
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

module.exports = router;
