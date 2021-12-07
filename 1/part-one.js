var fs = require("fs");
var path = require("path");

var input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
var lines = input.split(/\r?\n/);

var increasedMeasurements = 0;

for (var i = 1; i < lines.length; i++) {
  if (parseInt(lines[i]) > parseInt(lines[i - 1])) {
    increasedMeasurements++;
  }
}

console.log(increasedMeasurements);
