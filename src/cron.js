const { CronJob } = require("cron");
const jobs = [];
function initMessageCron(hour, minute, msg, channel, client) {
  const job = new CronJob(`0 ${minute} ${hour} * * *`, () => {
    client.channels.fetch(channel).then((ch) => ch.send(`${msg}`));
  });
  jobs.push(job);
  job.start();
}
module.exports = { initMessageCron, jobs };
