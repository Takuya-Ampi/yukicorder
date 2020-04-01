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
  const ans = lines.reduce((a, c) => a + c)
  console.log(ans);
});
