const Discord = require("discord.js");
const { runRandom2hu } = require("./random2hu.js");
const { initMessageCron, jobs, initCron } = require("./cron.js");
const { token, timers } = require("../meta/config.json");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged: ${client.user.tag}`);
});

timers.sort((a, b) => a.h - b.h);

for (const t of timers) {
  initMessageCron(t.h, t.m, t.msg, t.channel, client);
}

initCron(0, 0, () => runRandom2hu(client));

// console.log(timers[0].h);

// let firstTime = 0;
// for (const t of timers) {
//   if (t.h - moment().hours() < 0) {
//     continue;
//   }
//   firstTime = t.h;
//   break;
// }
// console.log(firstTime);

// setInterval(() => {}, 60_000);

// for (const t of timers) {
//   setInterval(() => {
//     if (moment().hour(t.h).minute(t.m).second(0) < moment().hour().minute()) {
//       client.channels
//         .fetch(t.channel || channel)
//         .then((ch) => ch.send(`${t.msg}`));
//     }
//   }, 60_000);
// }

client.login(token);
