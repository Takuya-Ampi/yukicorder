const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const arr = lines[0].split(' ').map(str => parseInt(str, 10));
  console.log(3 * arr[0] / 4 === arr[1] ? 'TATE' : 'YOKO');
});
