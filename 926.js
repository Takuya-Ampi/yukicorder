const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const formatArray = lines[0].split(' ')
  const daysPerYear = parseInt(formatArray[0])
  const daysPerWeek = parseInt(formatArray[1])
  const holidaysPerWeek = parseInt(formatArray[2])
  console.log(daysPerYear * holidaysPerWeek / daysPerWeek)
});
