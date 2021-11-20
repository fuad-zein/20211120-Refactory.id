// nearest fibonacci
// Have the function to find nearest Fibonacci numbers, that the parameter is array
function nearestFibonacci(arr) {
  let fibonacci = [0, 1];
  let result = [];
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    while (fibonacci[fibonacci.length - 1] < arr[i]) {
      temp = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(temp);
    }
    result.push(fibonacci[fibonacci.indexOf(arr[i])]);
  }
  return result;
}
console.log(nearestFibonacci([4, 8, 15, 16, 23, 42]));
