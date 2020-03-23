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
  const checkArr = arr.reduce((a, v) => {
    if (!a.includes(v)) {
      a.push(v);
    }
    return a;
  }, []);
  const judge1 = arr.filter(item => item === checkArr[0])
  const judge2 = arr.filter(item => item === checkArr[1])
  const checkTwo = (judge1.length === 2 || judge2.length === 2) ? true : false

  const length = checkArr.length
  switch (length) {
    case 2:
      console.log('FULL HOUSE')
      break;
    case 3:
      (checkTwo) ? console.log('TWO PAIR'): console.log('THREE CARD')
      break;
    case 4:
      console.log('ONE PAIR')
      break;

    default:
      console.log('NO HAND')
      break;
  }
});
