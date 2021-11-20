function fizzbuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(2));
console.log(fizzbuzz(20));
