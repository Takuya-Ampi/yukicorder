const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  let newArr = lines[0].split(' ').map(str => parseInt(str), 10)
  let filterArr = []
  newArr.forEach((item, index) => {
    if (index % 2 === 0) {
      filterArr.push(item)
    }
  });
  switch (filterArr[0] % 2) {
    case 0:
      if (filterArr[1] % 2 === filterArr[2] % 2) {
        console.log(':-)')
      } else {
        console.log(':-(')
      }
      break;

    default:
      if (filterArr[1] % 2 === filterArr[2] % 2) {
        console.log(':-(')
      } else {
        console.log(':-)')
      }
      break;
  }
});
