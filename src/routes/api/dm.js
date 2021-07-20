const { Op } = require('sequelize/types');
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
    const onlineMap = req.app.get('onlineMap');
    const workspaceOnlineMap = onlineMap[`/ws-${workspace.url}`];
    const receiverSocketId = Object.keys(workspaceOnlineMap).find(
      (socketId) => workspaceOnlineMap[socketId] === Number(ReceiverId),
    );

    io.of(`/ws-${workspace.url}`).to(receiverSocketId).emit('dm', dmWithSender);
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
    return res.json(
      await workspace.getDMs({
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
      }),
    );
  } catch (error) {
    next(error);
  }
});
