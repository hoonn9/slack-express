const { sequelize } = require('../../db/models');
const { isLoggedIn, isWorkspaceOwner } = require('../middleware');

const Workspace = require('../../db/models/workspace');
const Channel = require('../../db/models/channel');
const User = require('../../db/models/user');
const router = require('./users');

const Router = require('express').Router();

// create channel
Router.post('/workspaces/:workspace/channels', isLoggedIn, isWorkspaceOwner, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const workspace = await Workspace.findOne({
      where: { url: req.params.workspace },
      include: [
        {
          model: Channel,
          attributes: ['name'],
        },
      ],
    });

    if (!workspace) {
      await t.rollback();
      return res.status(404).send('존재하지 않는 워크스페이스 입니다.');
    }

    if (workspace.Channels.find((ch) => ch.name === req.body.name)) {
      await t.rollback();
      return res.status(404).send(`${req.body.name} 은 이미 존재하는 채널입니다.`);
    }

    const channel = await Channel.create(
      {
        name: req.body.name,
        WorkspaceId: workspace.id,
      },
      {
        transaction: t,
      },
    );

    await channel.addMembers(req.user.id, {
      transaction: t,
    });

    await t.commit();
    return res.json(channel);
  } catch (error) {
    await t.rollback();
    next(error);
  }
});

// get channels by user
Router.get('/workspaces/:workspace/channels', isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: {
        url: req.params.workspace,
      },
    });
    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스입니다.');
    }

    return res.json(
      await workspace.getChannels({
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
      }),
    );
  } catch (error) {
    console.dir(error);
    next(error);
  }
});

// get channel
Router.get('/workspaces/:workspace/channels/:channel', isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: {
        url: req.params.workspace,
      },
      include: [
        {
          model: Channel,
        },
      ],
    });
    // console.log(workspace);
    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스입니다.');
    }

    if (!workspace.Channels) {
      return res.status(404).send('생성된 채널이 없습니다. 채널을 먼저 생성하세요.');
    }

    const channel = workspace.Channels.find((ch) => ch.name === decodeURIComponent(req.params.channel));

    if (!channel) {
      return res.status(404).send('존재하지 않는 채널입니다.');
    }

    return res
      .status(200)
      .cookie(
        'w-sid',
        JSON.stringify({
          url: workspace.url,
          channel: {
            name: channel.name,
          },
        }),
        { expires: new Date(Date.now() + 900000), httpOnly: true },
      )
      .json(channel);
  } catch (error) {
    console.dir(error);
    next(error);
  }
});

// get members of channel
Router.get('/workspaces/:workspace/channels/:channel/members', isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: { url: req.params.workspace },
      include: [
        {
          model: Channel,
          attributes: ['id', 'name'],
        },
      ],
    });

    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스 입니다.');
    }

    if (!workspace.Channels) {
      return res.status(404).send('생성된 채널이 없습니다. 채널을 먼저 생성하세요.');
    }

    const channel = workspace.Channels.find((ch) => ch.name === decodeURIComponent(req.params.channel));

    if (!channel) {
      return res.status(404).send('존재하지 않는 채널입니다.');
    }

    return res.status(200).json(
      await channel.getMembers({
        attributes: ['id', 'nickname', 'email'],
      }),
    );
  } catch (error) {
    console.dir(error);
    next(error);
  }
});

// Add Member in Channel
router.post('/workspaces/:workspace/channels/:channel/members', isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: { url: req.params.workspace },
      include: [
        {
          model: Channel,
          attributes: ['id', 'name'],
        },
      ],
    });

    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스 입니다.');
    }

    if (!workspace.Channels) {
      return res.status(404).send('생성된 채널이 없습니다. 채널을 먼저 생성하세요.');
    }

    const channel = workspace.Channels.find((ch) => ch.name === decodeURIComponent(req.params.channel));

    if (!channel) {
      return res.status(404).send('존재하지 않는 채널입니다.');
    }

    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
      include: [
        {
          model: Workspace,
          as: 'Workspaces',
          through: {
            as: 'Workspaces',
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

    await channel.addMembers(user);
    return res.status(200).send('ok');
  } catch (error) {
    console.dir(error);
    next(error);
  }
});

module.exports = Router;
