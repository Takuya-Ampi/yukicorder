const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const newArr = lines[0].split(' ')
  switch (newArr[0]) {
    case 'Sat':
      if (newArr[1] === 'Sat' || newArr[1] === 'Sun'){
        console.log('8/33')
      }else {
        console.log('8/32')
      }
      break;
    case 'Sun':
      if (newArr[1] === 'Sat' || newArr[1] === 'Sun') {
        console.log('8/33')
      } else {
        console.log('8/32')
      }
      break;
    default:
      console.log('8/31');
      break;
  }
});
