// Array Basics
const fruits = ['apple', 'banana', 'mango', 'orange'];
console.log('Original Array:', fruits);

// Array Destructuring
const [first, second, ...rest] = fruits;
console.log('First:', first);
console.log('Second:', second);
console.log('Rest:', rest);

// Skipping elements in destructuring
const [fruit1, , fruit3] = fruits;
console.log('Fruit1:', fruit1, 'Fruit3:', fruit3);

// Nested Array Destructuring
const numbers = [1, [2, 3], 4];
const [one, [two, three], four] = numbers;
console.log(one, two, three, four);

// Default values in destructuring
const [a = 10, b = 20, c = 30] = [5];
console.log(a, b, c);

// Swapping Variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log('Swapped:', x, y);

// Array Methods
const arr = [1, 2, 3, 4, 5];

// Push (add to end), Pop (remove from end)
arr.push(6);
console.log('Push:', arr);
arr.pop();
console.log('Pop:', arr);

// Unshift (add to start), Shift (remove from start)
arr.unshift(0);
console.log('Unshift:', arr);
arr.shift();
console.log('Shift:', arr);

// Slice (no mutation) & Splice (mutates original array)
const slicedArr = arr.slice(1, 4);
console.log('Sliced:', slicedArr);

arr.splice(2, 1, 99);
console.log('Splice:', arr);

// Map, Filter, Reduce
const doubled = arr.map(num => num * 2);
console.log('Doubled:', doubled);

const evens = arr.filter(num => num % 2 === 0);
console.log('Evens:', evens);

const sum = arr.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// Finding Elements
const found = arr.find(num => num > 3);
console.log('Found:', found);

const index = arr.findIndex(num => num === 99);
console.log('Find Index:', index);

// Spread and Rest
const newArr = [...arr, 10, 20];
console.log('Spread:', newArr);

const combined = [...arr, ...fruits];
console.log('Combined:', combined);

// Array.from & Array.of
const strToArray = Array.from('Hello');
console.log('Array.from:', strToArray);

const newArray = Array.of(7, 8, 9);
console.log('Array.of:', newArray);

// Includes, Some, Every
console.log('Includes 99:', arr.includes(99));
console.log('Some > 50:', arr.some(num => num > 50));
console.log('Every < 100:', arr.every(num => num < 100));

// Flat & FlatMap
const nestedArray = [1, [2, [3, 4]], 5];
const flatArray = nestedArray.flat(2);
console.log('Flat:', flatArray);

const flatMapped = arr.flatMap(num => [num, num * 2]);
console.log('FlatMap:', flatMapped);

// Sorting Arrays
const unsorted = [3, 1, 4, 1, 5, 9];
const sorted = unsorted.sort((a, b) => a - b);
console.log('Sorted:', sorted);

// Reverse
const reversed = arr.reverse();
console.log('Reversed:', reversed);

// Destructuring in Function Parameters
const printArray = ([first, second, ...rest]) => {
    console.log('First:', first);
    console.log('Second:', second);
    console.log('Rest:', rest);
};
printArray(arr);

// Multidimensional Arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

htmlFor (const row of matrix) {
  console.log('Row:', row);
}

// Cloning Arrays
const clonedArray = arr.slice();
console.log('Cloned Array:', clonedArray);
