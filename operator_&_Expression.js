// Basic Arithmetic Operations
let a = 12;
let b = 4;
console.log(`Sum: ${a + b}`); // 16
console.log(`Difference: ${a - b}`); // 8
console.log(`Product: ${a * b}`); // 48
console.log(`Quotient: ${a / b}`); // 3
console.log(`Remainder: ${a % b}`); // 0
console.log(`Power: ${a ** b}`); // 20736

// Increment and Decrement
let count = 7;
console.log(`Initial Count: ${count}`);
console.log(`Post-Increment: ${count++}`); // 7
console.log(`After Post-Increment: ${count}`); // 8
console.log(`Pre-Increment: ${++count}`); // 9

// Assignment Operations
let num = 15;
num += 10; // 25
console.log(`Add and Assign: ${num}`);
num -= 5; // 20
console.log(`Subtract and Assign: ${num}`);
num *= 2; // 40
console.log(`Multiply and Assign: ${num}`);
num /= 4; // 10
console.log(`Divide and Assign: ${num}`);
num %= 3; // 1
console.log(`Modulus and Assign: ${num}`);

// Comparison Checks
console.log(`Is Equal (==): ${10 == '10'}`); // true
console.log(`Strict Equal (===): ${10 === '10'}`); // false
console.log(`Is Not Equal (!=): ${10 != '5'}`); // true
console.log(`Greater Than (>): ${20 > 15}`); // true
console.log(`Less Than (<): ${5 < 3}`); // false

// Logical Conditions
let isTrue = true;
let isFalse = false;
console.log(`AND Operator: ${isTrue && isFalse}`); // false
console.log(`OR Operator: ${isTrue || isFalse}`); // true
console.log(`NOT Operator: ${!isTrue}`); // false

// Bitwise Manipulation
console.log(`Bitwise AND: ${5 & 3}`); // 1
console.log(`Bitwise OR: ${5 | 3}`); // 7
console.log(`Bitwise XOR: ${5 ^ 3}`); // 6
console.log(`Left Shift: ${5 << 1}`); // 10
console.log(`Right Shift: ${8 >> 1}`); // 4

// Ternary Operation
let age = 22;
let isAdult = age >= 18 ? 'Adult' : 'Minor';
console.log(`Age Status: ${isAdult}`);

// Type Checking
console.log(`Type of 42: ${typeof 42}`);
console.log(`Type of 'Hello': ${typeof 'Hello'}`);
console.log(`Type of true: ${typeof true}`);

// Nullish Coalescing
let input = null;
let output = input ?? 'Default Value';
console.log(`Output: ${output}`);

// Optional Chaining
let person = { name: 'Vishal', details: { city: 'Mumbai' } };
console.log(`City: ${person?.details?.city}`);
console.log(`Phone: ${person?.contact?.phone}`);

// Expressions
const add = (x, y) => x + y;
console.log(`Sum of 8 and 12: ${add(8, 12)}`);

const data = { id: 1, title: 'JS Guide' };
console.log('Object:', data);

const list = [10, 20, 30];
console.log('Array:', list);

// Grouping Values
let total = (5 + 3) * 2;
console.log(`Total: ${total}`);