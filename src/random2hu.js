const fs = require("fs");

function random2hu(filename, excludeFileName) {
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
  return randomItem;
}

function sendToChannel(client, randomItem, excludeFileName) {
  console.log(`It's time to new Fortune Tells`);
  const msg = message.replace("${2hu}", randomItem);
  client.channels.fetch(channel).then((ch) => ch.send(`${msg}`));
  fs.appendFileSync(excludeFileName, randomItem + "\n");
  console.log(`${msg}
  `);
}

module.exports = { random2hu, sendToChannel };
