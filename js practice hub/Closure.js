// Basic Closure – Accessing Outer Scope Variables:
// How it works: An inner function can access variables from its outer function even after the outer function has finished executing.
// Example:

function greet(name) {
    return function () {
      console.log(`Hello, ${name}`);
    };
  }
  const sayHello = greet("Vishal");
  sayHello(); // Output: Hello, Vishal
  




//   Data Privacy – Using Closures htmlFor Private Variables:
// How it works: Variables inside a function are not accessible directly from outside, ensuring privacy.
// Example:
function counter() {
    let count = 0;
    return {
      increment: () => ++count,
      getCount: () => count,
    };
  }
  const c = counter();
  console.log(c.increment()); // 1
  console.log(c.getCount());  // 1

  
//   Function Factory – Returning Dynamic Functions:
// How it works: Functions can return other functions with pre-defined behavior using closures.
// Example:

function multiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  const double = multiplier(2);
  console.log(double(5)); // 10
  

//   Fixing Loop Issues – Solving Closure Problems with let:
// Problem: Using var in loops creates closure issues because it does not have block scope.
// Solution: Use let to capture the correct value in each iteration.
// Example:

htmlFor (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000 * i);
  }
  // Output: 1, 2, 3 (after 1s, 2s, 3s)

  
//   IIFE – Creating Modules Using Closures:
//   How it works: Immediately Invoked Function Expressions (IIFE) execute as soon as they are defined, useful htmlFor module creation.
//   Example:

const user = (function () {
    let name = "Vishal";
    return {
      getName: () => name,
      setName: (newName) => (name = newName),
    };
  })();
  console.log(user.getName()); // Vishal
  user.setName("Lokhande");
  console.log(user.getName()); // Lokhande
  