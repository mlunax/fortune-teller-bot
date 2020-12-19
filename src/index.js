const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const { random2hu } = require("./random2hu.js");

const {
  token,
  channel,
  message,
  filename,
  excludeFileName,
} = require("../meta/config.json");
const client = new Discord.Client();
const randomItem = random2hu(filename, excludeFileName);

client
  .on("ready", () => {
    console.log(`Logged: ${client.user.tag}`);
    console.log(`Tt's time to new Fortune Tells`);
    const msg = message.replace("${2hu}", randomItem);
    client.channels.fetch(channel).then((ch) => ch.send(`${msg}`));
    fs.appendFileSync(excludeFileName, randomItem + "\n");
  })
  .setInterval(() => client.destroy(), 10000);

client.login(token);
