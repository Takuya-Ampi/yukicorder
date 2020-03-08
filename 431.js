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
  const removed = newArr.pop()
  let count = 0
  newArr.forEach(item => {
    if(item === 1)
    count ++
  });
  if(removed === 1){
    console.log('SURVIVED')
  }else if(count >= 2){
    console.log('DEAD')
  }else {
    console.log('SURVIVED')
  }
});
