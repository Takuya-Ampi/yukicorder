const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const num = parseInt(lines[0])
  const arr = lines[1].split(' ').map(str => parseInt(str, 10))
  const evenCenter1 = num / 2 - 1
  const evenCenter2 = num / 2
  const oddCenter = Math.ceil((num / 2) - 1)
  const cmpFunc = (a, b) => {
    return a - b
  }
  arr.sort(cmpFunc)
  num % 2 === 0 ? console.log((arr[evenCenter1] + arr[evenCenter2]) / 2) : console.log(arr[oddCenter])
});
