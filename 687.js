const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const int = parseInt(lines[0])
  const firstTerm1 = 1
  const lastTerm1 = int - 1
  const firstTerm2 = 10
  const lastTerm2 = int - 10
  int < 11 ? console.log(`${firstTerm1} ${lastTerm1}`) : console.log(`${firstTerm2} ${lastTerm2}`)
});
