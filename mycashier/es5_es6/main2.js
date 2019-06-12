// Destructuring Assignment
// Array destructuring
const arr = [1,2];
const a = arr[0];
const b = arr[1];

const [c,d] = arr;
console.log(c, d);

const oneToFive = [1,2,3,4,5];
const [a1,b1, , , c1] = oneToFive;
console.log(a1, b1, c1);

const [a2, b2, ...rest] = oneToFive;
console.log(rest);