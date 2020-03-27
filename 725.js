const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const str = lines[0]
  const result = str.replace(/treeone/g, 'forest')
  console.log(result)
});
