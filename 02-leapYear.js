function leapYear(start, end) {
  let leapYearList = [];
  for (let i = start; i <= end; i++) {
    if (i % 4 === 0) {
      if (i % 100 === 0) {
        if (i % 400 === 0) {
          leapYearList.push(i);
        }
      } else {
        leapYearList.push(i);
      }
    }
  }
  return leapYearList;
}
console.log(leapYear(1900, 2020));
