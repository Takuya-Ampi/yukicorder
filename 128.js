const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const money = parseInt(lines[0])
  const child = parseInt(lines[1])
  const compute = Math.floor((money / 1000) / child)
  console.log(compute * 1000)
});
