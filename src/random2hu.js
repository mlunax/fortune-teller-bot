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

module.exports = { random2hu };
