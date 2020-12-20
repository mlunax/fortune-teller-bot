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
  let rI;

  if (file.length + 1 <= fileE.length) {
    console.log("Koniec 2hu");
    rI = "Brak dziewczynki, zrestaruj listę";
  } else {
    do {
      const randomNumber = Math.floor(Math.random() * file.length);
      rI = file[randomNumber];
    } while (fileE.includes(rI));
  }
  return rI;
}

function sendToChannel(client, rI, eFName) {
  console.log(`It's time to new Fortune Tells`);
  const msg = message.replace("${2hu}", rI);
  client.channels.fetch(channel).then((ch) => ch.send(`${msg}`));
  fs.appendFileSync(eFName, rI + "\n");
  console.log(`${msg}
  `);
}

module.exports = { runRandom2hu };
