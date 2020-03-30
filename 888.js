const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const number = parseInt(lines[0])
  const results = []
  const divisor = (num) => {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        results.push(i)
      }
    }
  }
  divisor(number)
  console.log(results.reduce((a, c) => a + c))
});
