// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let rev = 0;
  while (Math.abs(n) > 0) {
    rev = rev * 10 + n%10;
    n = Math.trunc(n/10);
  }
  return n >= 0 ? rev : -rev;
}

module.exports = reverseInt;

// function reverseInt(n) {
//   const rev = String(n).split('').reverse().join('');
//   return n >= 0 ? Number(rev) : Number(`-${rev.substr(0, rev.length-1)}`); 
// }