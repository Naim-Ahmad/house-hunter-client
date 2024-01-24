/**
Valid Palindrome

Write a JavaScript function called isPalindrome that takes a string as input and returns true if the string is a palindrome otherwise return false. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring punctuation, case, and spacing.

Sample:

isPalindrome("level"); // Output: true

isPalindrome("hello"); // Output: false

isPalindrome("A man, a plan, a canal: Panama"); // Output: true

*/

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

function isPalindrome(str) {
  let cleanString = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " ") {
      continue;
    } else if (char === ":") {
      continue;
    } else if (char === ",") {
      // console.log(char)
      continue;
    } else {
      cleanString += char;
    }
  }
  const reversedString = cleanString.split("").reverse().join("");
  console.log(reversedString.toLowerCase() === cleanString.toLowerCase());
}

isPalindrome("level"); // Output: true

isPalindrome("hello"); // Output: false

isPalindrome("A man, a plan, a canal: Panama"); // Output: true
