const Discord = require("discord.js");
const { random2hu, sendToChannel } = require("./random2hu.js");
const { initMessageCron, jobs } = require("./cron.js");
const {
  token,
  channel,
  message,
  filename,
  excludeFileName,
  timers,
} = require("../meta/config.json");
const client = new Discord.Client();
const randomItem = random2hu(filename, excludeFileName);

client.on("ready", () => {
  console.log(`Logged: ${client.user.tag}`);
});

timers.sort((a, b) => a.h - b.h);

for (const t of timers) {
  initMessageCron(t.h, t.m, t.msg, t.channel, client);
}

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
