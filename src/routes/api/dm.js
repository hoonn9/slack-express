const { Op } = require('sequelize');
const { Workspace, User, DM, OnlineMap, OnlineMember } = require('../../db/models');
const { upload } = require('../../multer');
const { isLoggedIn } = require('../middleware');

const router = require('express').Router();

// Send direct message
router.post('/workspaces/:workspace/dms/:id/chats', isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: { url: req.params.workspace },
    });
    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스입니다.');
    }
    const SenderId = req.user.id;
    const ReceiverId = req.params.id;
    const dm = await DM.create({
      SenderId,
      ReceiverId,
      WorkspaceId: workspace.id,
      content: req.body.content,
    });
    const dmWithSender = await DM.findOne({
      where: { id: dm.id },
      include: [
        {
          model: User,
          as: 'Sender',
        },
      ],
    });
    const io = req.app.get('io');

    const onlineMap = await OnlineMap.findOne({
      where: {
        namespace: `/ws-${workspace.url}`,
      },
      include: [
        {
          model: OnlineMember,
          as: 'Members',
          attributes: ['id', 'clientId', 'UserId'],
        },
      ],
    });

    const receiverClientId = onlineMap.Members.find((member) => member.UserId === Number(ReceiverId));

    io.of(`/ws-${workspace.url}`).to(receiverClientId).emit('dm', dmWithSender);
    res.send('ok');
  } catch (error) {
    next(error);
  }
});

// Get direct messages
router.get('/workspaces/:workspace/dms/:id/chats', isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: { url: req.params.workspace },
    });
    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스입니다.');
    }

    const dms = await workspace.getDMs({
      where: {
        [Op.or]: [
          {
            SenderId: req.user.id,
            ReceiverId: req.params.id,
          },
          {
            SenderId: req.params.id,
            ReceiverId: req.user.id,
          },
        ],
      },
      include: [
        {
          model: User,
          as: 'Sender',
          attributes: ['nickname', 'id', 'email'],
        },
        {
          model: User,
          as: 'Receiver',
          attributes: ['nickname', 'id', 'email'],
        },
      ],
      order: [['createdAt', 'DESC']],
      limit: parseInt(req.query.perPage, 10),
      offset: req.query.perPage * (req.query.page - 1),
    });
    return res.json(dms || []);
  } catch (error) {
    next(error);
  }
});

// Image upload of direct message
router.post('/workspaces/:workspace/dms/:id/images', upload.array('image'), isLoggedIn, async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: { url: req.params.workspace },
    });
    if (!workspace) {
      return res.status(404).send('존재하지 않는 워크스페이스입니다.');
    }
    const SenderId = req.user.id;
    const ReceiverId = req.params.id;

    await Promise.all(
      req.files.map(async (file) => {
        const dm = await DM.create({
          SenderId,
          ReceiverId,
          WorkspaceId: workspace.id,
          content: file.path,
        });
        const dmWithSender = await DM.findOne({
          where: { id: dm.id },
          include: [
            {
              model: User,
              as: 'Sender',
            },
          ],
        });
        const io = req.app.get('io');

        const onlineMap = await OnlineMap.findOne({
          where: {
            namespace: `/ws-${workspace.url}`,
          },
          include: [
            {
              model: OnlineMember,
              as: 'Members',
              attributes: ['id', 'clientId', 'UserId'],
            },
          ],
        });

        const receiverClientId = onlineMap.Members.find((member) => member.UserId === Number(ReceiverId));
        io.of(`/ws-${workspace.url}`).to(receiverClientId).emit('dm', dmWithSender);
      }),
    );
    return res.send('ok');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
