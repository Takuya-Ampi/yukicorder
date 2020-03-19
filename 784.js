const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => lines.push(line));
reader.on("close", () => {
  const ans = lines[0]
    .split('')
    .reverse()
    .reduce((acc, cur, i) => i % 3 === 0 ? `${cur},${acc}` : `${cur}${acc}`, '')
    .slice(0, -1);
  console.log(ans);
});
