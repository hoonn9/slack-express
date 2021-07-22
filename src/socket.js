const SocketIo = require('socket.io');
const { OnlineMap, OnlineMember } = require('./db/models');

module.exports = (server, app) => {
  const io = SocketIo(server, {
    path: '/socket.io',
  });
  app.set('io', io);
  io.of(/^\/ws-.+$/).on('connect', async (client) => {
    const namespace = client.nsp;

    let onlineMap = await OnlineMap.findOne({
      where: {
        namespace: namespace.name,
      },
    });
    // Map에 없으면 Workspace 초기화
    if (!onlineMap) {
      onlineMap = await OnlineMap.create({
        namespace: namespace.name,
      });
    }

    client.emit(`hello ${namespace.name} workspace`);
    client.on('login', async (listener) => {
      const { id, channels } = listener;

      console.log('login');
      const onlineMap = await OnlineMap.findOne({
        where: {
          namespace: namespace.name,
        },
        include: [
          {
            model: OnlineMember,
            as: 'Members',
            attributes: ['id', 'clientId', 'UserId'],
          },
        ],
      });

      const user = onlineMap.Members.find((member) => {
        return member.UserId === id;
      });
      if (!user) {
        const member = await OnlineMember.create({
          clientId: client.id,
          UserId: id,
          OnlineMapId: onlineMap.id,
        });
        onlineMap.Members.push(member);
      } else {
        user.clientId = client.id;
        await user.save();
      }

      onlineMap.Members.forEach((mem) => console.log(mem.UserId));

      namespace.emit(
        'onlineList',
        onlineMap.Members.map((member) => member.UserId),
      );
      channels.forEach((ch) => {
        console.log(`${namespace.name}-${ch}`);
        client.join(`${namespace.name}-${ch}`);
      });
    });

    client.on('disconnect', async () => {
      console.log('disconnect');
      const onlineMap = await OnlineMap.findOne({
        where: {
          namespace: namespace.name,
        },
        include: [
          {
            model: OnlineMember,
            as: 'Members',
          },
        ],
      });
      if (onlineMap) {
        const onlineMembers = [];

        await Promise.all(
          onlineMap.Members.map(async (member) => {
            if (member.clientId === client.id) {
              await member.destroy();
              return;
            }
            onlineMembers.push(member);
          }),
        );
        namespace.emit(
          'onlineList',
          onlineMembers.map((member) => member.UserId),
        );
      }
    });
  });
};
