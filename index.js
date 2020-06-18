// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a)); // output: false
console.log(Array.isArray(b)); // output: true


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log(a.map(elem => elem *= 2));


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.toString().replace(/,/g, ' '));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.toString().replace(/,/g, '+'));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.toString());

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((x, y) => y - x);
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function getFrequentElemFromArray(arr) {
  let map = new Map();
  a.forEach(elem => {
    if (map.has(elem)) {
      map.set(elem, map.get(elem) + 1);
    } else {
      map.set(elem, 1);
    }
  });
  return Array.from(map).sort((a, b) => b[1] - a[1])[0][0];
}
console.log(getFrequentElemFromArray(a));