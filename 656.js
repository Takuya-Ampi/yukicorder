const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const splitted = lines[0].split('')
  // 配列の特定文字列全置換
  const replaceItem = (arr, before, after) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace(before, after)
    }
  }
  replaceItem(splitted, '0', '10')
  const result = splitted.map(str => parseInt(str, 10)).reduce((a, c) => a + c)
  console.log(result);

});
