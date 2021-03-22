// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let rev = ''

  for (let char of str) {
    rev = char + rev
  }
  return rev
}

reverse('abcd')
module.exports = reverse

//
//

//

//
//
//
//

//
//
//

//

//

//

//
//
//
//
//
//

//
//
//
//
//  let rev = ''

//   for (let i = 0; i < str.length; i++) {
//     rev = str[i] + rev
//   }
//   return rev
