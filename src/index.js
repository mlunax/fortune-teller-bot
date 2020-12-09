const Discord = require("discord.js");
const fs = require("fs");

const {
  token,
  channel,
  message,
  filename,
  excludeFileName,
} = require("../meta/config.json");
const client = new Discord.Client();

const file = fs.readFileSync(filename, "utf8").toString().split("\n");
const fileE = fs.readFileSync(excludeFileName, "utf8").toString().split("\n");
let randomItem;

if (file.length + 1 <= fileE.length) {
  console.log("Koniec 2hu");
  client.destroy();
  return;
} else {
  do {
    const randomNumber = Math.floor(Math.random() * file.length);
    randomItem = file[randomNumber];
  } while (fileE.includes(randomItem));
}
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
