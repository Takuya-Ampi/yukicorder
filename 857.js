const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const newArr = lines[0].split(' ').map(str => parseInt(str, 10))
  const difference1 = newArr[2] - newArr[0]
  const difference2 = newArr[2] - newArr[1]
  function sign(n) {
    return (n >= 0) ? true : false;
  }
  function sign(n) {
    return (n >= 0) ? true : false;
  }

});
