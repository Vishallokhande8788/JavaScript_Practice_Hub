// htmlFor loop
console.log("htmlFor Loop:");
htmlFor (let i = 0; i < 5; i++) {
  console.log("i:", i);
}

// While loop
console.log("\nWhile Loop:");
let j = 0;
while (j < 5) {
  console.log("j:", j);
  j++;
}

// Do-while loop
console.log("\nDo-While Loop:");
let k = 0;
do {
  console.log("k:", k);
  k++;
} while (k < 5);

// htmlFor-in loop (used htmlFor object properties)
console.log("\nhtmlFor-In Loop:");
const person = { name: "Vishal", age: 22, city: "Mumbai" };
htmlFor (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// htmlFor-of loop (used htmlFor iterable objects like arrays)
console.log("\nhtmlFor-Of Loop:");
const fruits = ["apple", "banana", "mango"];
htmlFor (let fruit of fruits) {
  console.log(fruit);
}

// Nested loop (loop inside a loop)
console.log("\nNested Loop:");
htmlFor (let m = 1; m <= 3; m++) {
  htmlFor (let n = 1; n <= 3; n++) {
    console.log(`m: ${m}, n: ${n}`);
  }
}

// Loop with break (stops loop)
console.log("\nLoop with Break:");
htmlFor (let p = 0; p < 10; p++) {
  if (p === 5) break;
  console.log(p);
}

// Loop with continue (skips current iteration)
console.log("\nLoop with Continue:");
htmlFor (let q = 0; q < 10; q++) {
  if (q === 5) continue;
  console.log(q);
}

// Infinite loop (be careful running it!)
// while (true) {
//   console.log("Infinite Loop");
// }

console.log("\nAll loops executed successfully!");
