var fs = require("fs");
var path = require("path");

var input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
var lines = input.split(/\r?\n/);

var horizontalPosition = 0;
var depth = 0;

for (var i = 0; i < lines.length; i++) {
  var action = lines[i].split(" ")[0];
  var value = parseInt(lines[i].split(" ")[1]);

  if (action == "forward") {
    horizontalPosition = horizontalPosition + value;
  } else if (action == "down") {
    depth = depth + value;
  } else if (action == "up") {
    depth = depth - value;
  }
}

console.log(horizontalPosition * depth);
