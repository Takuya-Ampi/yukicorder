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
  // 余り
  const remainder = newArr[0] % newArr[1]
  // 商
  const quotient = newArr[0] / newArr[1]
  // 素数（2以上の数で割って余りが0になることのない数（ただし、2を除く））判定。numが素数の時true,numが素数でない時falseで返す
  function primeNumber(num) {
    if (num === 2) {
      return true
    } else {
      for (let index = 2; index < num; index++) {
        if (num % index === 0) {
          return false;
        }
        if (index + 1 === num) {
          return true
        }
      }
    }
  }
  // remainderが0かつquotientが1、または、remainderが0かつquotientとnewArr[1]の積がnewArr[0]になる、または、remainderが0かつquotientが素数でない時Yesと出力する
  switch (remainder) {
    case 0:
      if (quotient === 1) {
        console.log('YES')
      } else if (quotient * newArr[1] === newArr[0]) {
        console.log('YES')
      } else if (!primeNumber(quotient)) {
        console.log('YES')
      } else {
        console.log('NO')
      }
      break;
    default:
      console.log('NO')
      break;
  }
});
