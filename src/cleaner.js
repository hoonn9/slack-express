const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const { OnlineMember } = require('./db/models');

// Schedule tasks to be run on the server.
cron.schedule('*/15 * * * * *', function () {
  const folder = path.join(__dirname, '../', 'uploads');

  fs.readdir(folder, (err, files) => {
    if (err) console.log(err);

    for (const file of files) {
      fs.access(path.join(folder, file), fs.constants.F_OK, (err) => {
        if (err) return console.log('삭제할 수 없는 파일입니다', err);

        fs.unlink(path.join(folder, file), (err) => {
          if (err) return console.log(err);
        });
      });
    }
    console.log('uploads empty');
  });

  console.log('running a task every minute');
});

const cleanOnlineMembers = async () => {
  const members = await OnlineMember.findAll();
  await Promise.all(members.map(async (member) => member.destroy()));
};

cleanOnlineMembers();
