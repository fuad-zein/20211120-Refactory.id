const data = require("./data.json");

const electronicDevices = data.filter(function (item) {
  return item.type === "electronic";
});
console.log(electronicDevices);
