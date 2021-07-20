const SocketIo = require('socket.io');

const onlineMap = {};
module.exports = (server, app) => {
  const io = SocketIo(server, {
    path: '/socket.io',
  });
  app.set('io', io);
  app.set('onlineMap', onlineMap);

  io.of(/^\/ws-.+$/).on('connect', (client) => {
    const namespace = client.nsp;

    // Map에 없으면 Workspace 초기화
    if (!onlineMap[namespace.name]) {
      onlineMap[namespace.name] = {};
    }

    client.emit(`hello ${namespace.name} workspace`);

    client.on('login', (listener) => {
      const { id, channels } = listener;
      onlineMap[namespace.name][client.id] = id;
      namespace.emit('onlineList', Object.values(onlineMap[namespace.name]));
      console.log(onlineMap);
      channels.forEach((ch) => {
        console.log(`${namespace.name}-${ch}`);
        client.join(`${namespace.name}-${ch}`);
      });
    });

    client.on('disconnect', () => {
      delete onlineMap[namespace.name][client.id];
      namespace.emit('onlineList', Object.values(onlineMap[namespace.name]));
    });
  });
};
