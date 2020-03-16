const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const newArr = lines[0].split(" ").map(str => parseInt(str, 10))
  function compareFunc(a, b) {
    return a - b;
  }
  newArr.sort(compareFunc)
  let sum = newArr.reduce((a, b) => a + b)
  const check = 4 * newArr[0] + 6
  if (sum === check) {
    console.log('Yes')
  } else {
    console.log('No')
  }
});
