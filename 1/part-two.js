var fs = require("fs");
var path = require("path");

var input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
var lines = input.split(/\r?\n/).map((item) => parseInt(item, 10));

var increasedMeasurements = 0;

for (var i = 0; i < lines.length - 3; i++) {
  var window = lines[i] + lines[i + 1] + lines[i + 2];
  var nextWindow = lines[i + 1] + lines[i + 2] + lines[i + 3];

  if (nextWindow > window) {
    increasedMeasurements++;
  }
}

console.log(increasedMeasurements);
