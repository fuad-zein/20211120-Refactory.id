const data = require("./data.json");

function findItemsByType(type) {
  return data.filter((item) => item.placement.name === type);
}
console.log(findItemsByType("Meeting Room"));
