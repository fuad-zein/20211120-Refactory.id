function palindrome(str) {
  let newStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let newStrReverse = newStr.split("").reverse().join("");
  return newStr === newStrReverse;
}

console.log(palindrome("Radar"));
console.log(palindrome("Malam"));
console.log(palindrome("Kasur ini rusak"));
console.log(palindrome("Ibu Ratna antar ubi"));
console.log(palindrome("Malas"));
console.log(palindrome("Makan nasi goreng"));
console.log(palindrome("Balonku ada lima"));
