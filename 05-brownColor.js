const data = require("./data.json");

const brownColor = data.filter(function (item) {
  let brown = item.tags.includes("brown");
  return brown;
});
console.log(brownColor);
