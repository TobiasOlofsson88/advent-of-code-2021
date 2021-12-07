var fs = require("fs");
var path = require("path");

var input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
var lines = input.split(/\r?\n/);

var gammaRate = "";

for (var i = 0; i < 12; i++) {
  var zeros = 0;
  var ones = 0;
  for (var ii = 0; ii < lines.length; ii++) {
    if (lines[ii][i] == "0") {
      ones++;
    } else {
      zeros++;
    }
  }
  gammaRate = gammaRate + (ones > zeros ? "0" : "1");
}

var epsilonRate = [...gammaRate]
  .map((character) => {
    if (character == "1") return "0";
    if (character == "0") return "1";
  })
  .join("");

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
