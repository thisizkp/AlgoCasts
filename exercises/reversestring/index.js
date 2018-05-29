// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
  const reverse_reducer = (accumulator, currentValue) => currentValue + accumulator;
  return str.split('').reduce(reverse_reducer, "");
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let reverse_st = "";
//   const str_len = str.length;

//   for(let i=str_len-1; i>=0; i--) {
//     reverse_st += str[i];
//   }
//   return reverse_st;
// }

// function reverse(str) {
//   let reversed = "";
//   for(let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }