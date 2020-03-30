const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const arr = lines[0].split(' ').map(str => parseInt(str, 10))
  const men = arr[0] + 1
  const women = arr[1]
  men <= women ? console.log('YES') : console.log('NO')
  men >= women ? console.log(men - women) : console.log(women - men)
});
