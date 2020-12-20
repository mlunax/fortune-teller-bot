const fs = require("fs");
const {
  message,
  channel,
  filename,
  excludeFileName,
} = require("../meta/config.json");

function runRandom2hu(client) {
  const randomItem = random2hu(filename, excludeFileName);
  sendToChannel(client, randomItem, excludeFileName);
}

function random2hu(fName, eFName) {
  const file = fs.readFileSync(fName, "utf8").toString().split("\n");
  const fileE = fs.readFileSync(eFName, "utf8").toString().split("\n");
  const dataWithoutExceptions = file.filter((x) => !fileE.includes(x));

  if (file.length + 1 <= fileE.length) {
    console.log("Koniec 2hu");
    return "Brak dziewczynki, zrestaruj listę";
  }

  const randomNumber = Math.floor(Math.random() * dataWithoutExceptions.length);
  return dataWithoutExceptions[randomNumber];
}

async function sendToChannel(client, rI, eFName) {
  console.log(`It's time to new Fortune Tells`);
  const messageToSend = message.replace("${2hu}", rI);
  const ch = await client.channels.fetch(channel);
  ch.send(messageToSend);
  fs.appendFileSync(eFName, `${rI}\n`);
  console.log(`${messageToSend}\n`);
}

module.exports = runRandom2hu;
