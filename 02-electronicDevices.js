const data = require("./data.json");
// get data from json
// find items by value "Meeting Room" at data.json
// and print to console
function getData(value) {
  return data.find((item) => item.value === value);
}
console.log(getData("Brown Chair"));
