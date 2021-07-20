const { Workspace, Channel } = require('../db/models');

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인하지 않은 사용자만 접근할 수 있습니다.');
  }
};

exports.isWorkspaceOwner = async (req, res, next) => {
  const url = req.params.workspace;
  try {
    const workspace = await Workspace.findOne({
      where: {
        url: url,
      },
    });

    if (req.user.id !== workspace.OwnerId) {
      return res.status(401).send('워크스페이스 관리자가 아닙니다.');
    }
    next();
  } catch (error) {
    console.dir(error);
    return res.status(400).send('error');
  }
};

exports.channelProvider = async (req, res, next) => {
  if (!req.params.workspace || !req.params.channel) {
    return res.status(403).send('error');
  }
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

    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스입니다.');
    }

    const channel = workspace.Channels.find((v) => v.name === decodeURIComponent(req.params.channel));

    if (!channel) {
      return res.status(404).send('존재하지 않는 채널입니다.');
    }

    req.workspace = workspace;
    req.channel = channel;
    next();
  } catch (error) {
    console.dir(error);
    return res.status(400).send('error');
  }
};
