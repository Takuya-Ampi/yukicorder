const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const formatArray = lines[0].split(",");
  const target = "AC";
  const check = formatArray.every(item => item === target);
  if (check) {
    console.log("Done!");
  } else {
    console.log('Failed...')
  }
});
