const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const heightA = parseInt(lines[0])
  const heightB = parseInt(lines[1])
  const heightC = parseInt(lines[2])

  let compareFunc = (a, b) =>{
    return (a < b ? 1 : -1);
  }

  let array = [
    { name: "A", value: heightA},
    { name: "B", value: heightB},
    { name: "C", value: heightC},
  ]
  array.sort((a,b)=>{
    return (a.value < b.value ? 1 : -1)
  })
  console.log(array[0].name)
  console.log(array[1].name)
  console.log(array[2].name)
});
