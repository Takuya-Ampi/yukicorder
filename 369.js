const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const num = lines.shift()
  const ans = parseInt(lines.pop())
  const arr = lines[0].split(' ').map(str => parseInt(str, 10))
  const sum = arr.reduce((a, c) => a + c)
  const result = sum - ans
  console.log(result);
});
