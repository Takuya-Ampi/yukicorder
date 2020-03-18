const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const AllRed = lines.every(item => item === "RED")
  const AllBlue = lines.every(item => item === "BLUE")
  const checkRed = lines.filter(item => item === "RED")
  if (AllRed || AllBlue) {
    console.log(lines[0])
  } else if (checkRed.length > 1) {
    console.log("RED")
  } else {
    console.log("BLUE")
  }
});
