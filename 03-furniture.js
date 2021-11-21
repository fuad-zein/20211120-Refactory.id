const data = require("./data.json");

const furniture = data.filter(function (item) {
  return item.type === "furniture";
});
console.log(furniture);
