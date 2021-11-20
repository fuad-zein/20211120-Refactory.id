function reverseWords(input) {
  let words = input.split(" ");
  let reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    reversedWords.push(words[i].split("").reverse().join(""));
  }
  return reversedWords.join(" ");
}
console.log(reverseWords("I am A Great human"));
