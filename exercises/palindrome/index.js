// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let rev = ''

  for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
  }
  if (rev === str) {
    return true
  }
  return false
}

module.exports = palindrome

//using the .every() array method

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
//   })
// }
