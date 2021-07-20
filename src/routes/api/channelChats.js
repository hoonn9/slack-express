const { Channel, User, ChannelChat } = require('../../db/models');
const { upload } = require('../../multer');
const { isLoggedIn, channelProvider } = require('../middleware');

const router = require('express').Router();

// Send channel Chat
router.post('/workspaces/:workspace/channels/:channel/chats', isLoggedIn, channelProvider, async (req, res, next) => {
  try {
    const chat = await ChannelChat.create({
      UserId: req.user.id,
      ChannelId: req.channel.id,
      content: req.body.content,
    });

    const chatWithUser = await ChannelChat.findOne({
      where: {
        id: chat.id,
      },
      include: [
        {
          model: User,
        },
        {
          model: Channel,
        },
      ],
    });

    console.log(`/ws-${req.workspace.url}-${req.channel.id}`);
    const io = req.app.get('io');
    io.of(`/ws-${req.workspace.url}`).to(`/ws-${req.workspace.url}-${req.channel.id}`).emit('message', chatWithUser);
    return res.status(200).send('ok');
  } catch (error) {
    next(error);
  }
});

// Get channel Chats
router.get('/workspaces/:workspace/channels/:channel/chats', isLoggedIn, channelProvider, async (req, res, next) => {
  try {
    const chats = await req.channel.getChats({
      include: [
        {
          model: User,
          attributes: ['id', 'nickname', 'email'],
        },
        {
          model: Channel,
        },
      ],
      order: [['createdAt', 'DESC']],
      limit: parseInt(req.query.perPage, 10),
      offset: req.query.perPage * (req.query.page - 1),
    });
    return res.json(chats || []);
  } catch (error) {
    next(error);
  }
});

// Image upload
router.post(
  '/workspaces/:workspace/channels/:channel/images',
  isLoggedIn,
  channelProvider,
  upload.array('image'),
  async (req, res, next) => {
    try {
      await Promise.all(
        req.files.map(async (file) => {
          const chat = await ChannelChat.create({
            UserId: req.user.id,
            ChannelId: req.channel.id,
            content: file.path,
          });

          const chatWithUser = await ChannelChat.findOne({
            where: { id: chat.id },
            include: [
              {
                model: User,
              },
              {
                model: Channel,
              },
            ],
          });

          const io = req.app.get('io');
          io.of(`/ws-${req.workspace.url}`)
            .to(`/ws-${req.workspace.url}-${req.channel.id}`)
            .emit('message', chatWithUser);
        }),
      );

      return res.status(200).send('ok');
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
