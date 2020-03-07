const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const string = lines[0]
  const newStringFirst = string.slice(0,string.length/2)
  const newStringSecond = string.slice(string.length/2,string.length)
  if (newStringFirst === newStringSecond){
    console.log('YES')
  }else {
    console.log('NO')
  }
});
